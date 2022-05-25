/**
 * 图标列表
 * **/
import React, { useState } from 'react';
import styles from './styles.module.css';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Modal from '@material-ui/core/Modal';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import { TransitionProps } from '@material-ui/core/transitions';
import { DownloadBaseOutline } from '@icon-garden/react';
import IconDownloadPanel from '../IconDownloadPanel';

export type IconItem = {
  name: string;
  title: string,
  icon: typeof DownloadBaseOutline;
  size?: number;
  color?: string;
};

type IProps = {
  outlined: IconItem[];
  filled?: IconItem[];
}

const options = [
  { label: '线性图标', value: 'outline' },
  { label: '面性图标', value: 'fill' },
];

function TabPanel({ type, value, children }) {
  return (
    <div
      role="tabpanel"
      hidden={value !== type}
    >
      {value === type && children}
    </div>
  );
}

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & { children?: React.ReactElement<any, any> },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default ({ outlined, filled }: IProps) => {
  const [iconType, setIconType] = useState<'outline'|'fill'>('outline');
  const [currentItem, setCurrentItem] = useState<IconItem>(null);
  const [visible, setVisible] = useState<boolean>(false);

  const clickItem = (item) => {
    setCurrentItem(item)
    setVisible(true);
  };

  const onChange = (event: React.ChangeEvent<{}>, newValue: 'outline'|'fill') => {
    setIconType(newValue)
  }

  const renderItem = (item: IconItem) => {
    const { name, title, icon: Icon } = item;
    return (
      <div key={name} className={styles.item} onClick={() => clickItem(item)}>
        <div className={styles.name}>{title}</div>
        <Icon size="32" color="#000000" />
        <div className={styles.footer}>
          <DownloadBaseOutline color="#b0b1b8" size="16" />
        </div>
      </div>
    ) 
  }

  return <>
    <Tabs value={iconType} onChange={onChange} style={{ marginBottom: 20 }}>
      <Tab label="线性图标" value="outline" />
      <Tab label="面性图标" value="fill" />
    </Tabs>
    <TabPanel value={iconType} type='outline'>
      {outlined.map(renderItem)}
    </TabPanel>
    <TabPanel value={iconType} type='fill'>
      {filled.map(renderItem)}
    </TabPanel>
    <Dialog
      open={visible}
      keepMounted
      TransitionComponent={Transition}
      onClose={() => setVisible(false)}
    >
      <IconDownloadPanel item={currentItem} />
    </Dialog>
  </>
}