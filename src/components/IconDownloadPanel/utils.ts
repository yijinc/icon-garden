function triggerDownload (url: string, fileName: string = 'image.png'): void {
  const evt: MouseEvent = new MouseEvent('click', {
    view: window,
    bubbles: false,
    cancelable: true
  });
  const aLink: HTMLAnchorElement = document.createElement("a");
  aLink.setAttribute('href', url);
  aLink.setAttribute('download', fileName);
  aLink.dispatchEvent(evt);
}
/**
 * 创建 canvas, svg -> image -> canvas -> Blob
 * **/
function svgToBlob(svgDom): Promise<Blob> {
  return new Promise((resolve, reject) => {
    const canvas: HTMLCanvasElement = document.createElement("canvas");
    const ctx = canvas.getContext('2d');
    const data = (new XMLSerializer()).serializeToString(svgDom);
    const svgBlob = new Blob([data], {type: 'image/svg+xml;charset=utf-8'});
    const url = URL.createObjectURL(svgBlob);
    const img = new Image();

    const callback = (blob: Blob) => {
      resolve(blob);
    };

    const onLoad = () => {
      // no longer need to read the blob so it's revoked
      URL.revokeObjectURL(url);

      canvas.width = img.naturalWidth;
      canvas.height = img.naturalHeight;
      ctx.drawImage(img, 0, 0);

      canvas.toBlob(callback, 'image/png', 1);
    };

    img.onload = onLoad;
    img.onerror = () => reject(`image load error, url: ${url}`);
    img.src = url;
  });
}

/**
 * 下载 svg icon
 * @param {SVGElement} svgDom
 * @param {string} fileName => *.png | *.svg
 * **/
export async function download(svgDom: SVGElement, fileName: string) {
  try {
    const arr = fileName.split(".");
    const extName: 'svg'|'png' = arr[arr.length - 1].toLowerCase() as ('svg'|'png');
    if (extName === 'png') {
      const blob = await svgToBlob(svgDom);
      const url = URL.createObjectURL(blob);
      triggerDownload(url, fileName);
      setTimeout(() => URL.revokeObjectURL(url));
    } else {
      const url = `data:image/svg+xml;base64,${window.btoa(svgDom.outerHTML)}`;
      triggerDownload(url, fileName);
    }
  } catch(err) {
    console.error(err);
  }
}

/**
 * 复制 svg icon
 * @param {SVGElement} svgDom
 * @param {string} type => png | svg
 * **/
export async function copy(svgDom: SVGElement, type: 'svg'|'png') {
  if (location.protocol === 'http:') {
    return;
  }
  try {
    // check permission 当前不需要，在http 域下为不安全网站 不能复制
    navigator.permissions.query({ name: 'clipboard-write' }).then((result: PermissionStatus) => {
      console.log("has permission", result);
      if (result.state === "denied") {
        // permissions.request()
      }
    }).catch(error => console.warn('navigator.permissions.query error', error));

    if (type === 'png') {
      const blob = await svgToBlob(svgDom);
      await navigator.clipboard.write([
        new ClipboardItem({
          [blob.type]: blob
        })
      ])
      console.log('Copied')
    } else {
      navigator.clipboard.writeText(svgDom.outerHTML);
    }
  } catch(err) {
    console.error(err);
  }
}

export function isLightColor(color) {
  const hex = color.replace('#', '');
  const c_r = parseInt(hex.substr(0, 2), 16);
  const c_g = parseInt(hex.substr(2, 2), 16);
  const c_b = parseInt(hex.substr(4, 2), 16);
  const brightness = ((c_r * 299) + (c_g * 587) + (c_b * 114)) / 1000;
  return brightness > 200; // 0 - 255
}