/**
 * 图标列表
 * **/
import React from 'react';
import styles from './styles.module.css';
import { DownloadBaseOutline } from '@icon-garden/react';

export type IconItem = {
  name: string;
  icon: typeof DownloadBaseOutline;
  size?: number;
  color?: string;
};

type IProps = {
  icons: IconItem[];
}

export default ({ icons }: IProps) => {

  const clickItem = (item) => {
  };

  return (
    <div className={styles.container}>
      {
        icons.map(item => {
          const { name, icon: Icon } = item;
          return <div key={name} className={styles.item} onClick={() => clickItem(item)}>
            <div className={styles.name}>{name}</div>
            <Icon size="32" color="#000000" />
            <div className={styles.footer}>
              <DownloadBaseOutline fill="#b0b1b8" size="14" />
            </div>
          </div>
        })
      }
    </div>
  )
}