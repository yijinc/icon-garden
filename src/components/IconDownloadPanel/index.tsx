/**
 * 图标下载面板
 * **/
import React, { useReducer, useRef } from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import TextField from '@material-ui/core/TextField';
import styles from './styles.module.css';
import { AcceptEmail } from '@icon-garden/react';
import InputWithSelect from './InputWithSelect';
import { download, copy, isLightColor } from './utils';

export type IconItem = {
  name: string;
  title: string,
  icon: typeof AcceptEmail;
};

type IProps = {
  item: IconItem,
};
type IState = {
  color: string;
  size: number;
}

const preparedColors = [ "#EE0A24", "#ED6A0C", "#FFAF00", "#07C160", "#264AFF", "#D4DBFF", "#FFFFFF", "#F7F8FA", "#DDDEE0", "#A3A4AD", "#5E5E66", "#131212"];
 
const initialState: IState = {
  size: 128,
  color: preparedColors[0],
};

function reducer(state: IState, action) {
  const { type, value } = action;
  switch (type) {
    case 'setColor':
      return { ...state, color: value };
    case 'setSize':
      return { ...state, size: value };
    default:
      return state;
  }
}

export default ({ item }: IProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const iconRef = useRef<HTMLDivElement>(null);
  const Icon = item?.icon || (() => null);

  const onChangeText = (e) => {
    const value = `#${e.target.value}`;
    dispatch({ type: 'setColor', value });
  };

  const onChangeColor = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    dispatch({ type: 'setColor', value });
  };

  const onChangeSize = (value) => {
    dispatch({ type: 'setSize', value });
  };

  const downloadIcon = (type: 'svg'|'png'):void => {
    if (iconRef.current) {
      const svg = iconRef.current.querySelector('svg');
      svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
      download(svg, `${item.name}.${type}`);
    }
  };

  const copyIcon = (type: 'svg'|'png') => {
    if (iconRef.current) {
      const svg = iconRef.current.querySelector('svg');
      svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
      copy(svg, type);
    }
  };

  const { color, size } = state;
  const colorVal = color?.startsWith('#') ? color.split('#')[1] : '';

  return (
    <Card className={styles.card}>
      <CardContent>
        <div className={styles.iconBox} ref={iconRef} style={{ backgroundColor: isLightColor(color) ? '#000' : '#FFF'}}>
          <Icon size={size} color={color} />
        </div>
      </CardContent>
      <CardContent>
        <div className={styles.prepared}>
          {
            preparedColors.map(color => <div
              key={color}
              className={styles.item}
              style={{ backgroundColor: color }}
              onClick={() => dispatch({ type: 'setColor', value: color })}
            >{color}</div>)
          }
        </div>
        <div className={styles.row}>
          <CardActionArea style={{ width: 200 }}>
            <div className={styles.colorInput}>
              <TextField
                required
                label="color hex"
                value={colorVal}
                onChange={onChangeText}
                variant="outlined"
              />
              <input type="color" value={color} onChange={onChangeColor} />
            </div>
          </CardActionArea>
          <CardActionArea style={{ width: 200 }}>
            <InputWithSelect value={size} onChange={onChangeSize} />
          </CardActionArea>
        </div>
      </CardContent>
      <CardActions style={{ paddingLeft: 16 }}>
        <Button variant="contained" color="primary" onClick={() => downloadIcon('png')}>下载PNG</Button>
        <Button variant="contained" color="primary" onClick={() => downloadIcon('svg')}>下载SVG</Button>
        <Button variant="contained" color="secondary" onClick={() => copyIcon('png')}>复制PNG</Button>
        <Button variant="contained" color="secondary" onClick={() => copyIcon('svg')}>复制SVG</Button>
      </CardActions>
    </Card>
  )
}