/**
 * 数字输入框
** **/
import React, { useState, useEffect } from 'react';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import styles from './styles.module.css';

type IProps = {
  value: number;
  onChange: (val: number) => void;
};

const preparedSizes = ['16', '32', '48', '64', '128', '256'];

export default function InputWithSelect({ value, onChange }: IProps) {
  const valueStr = String(value);
  const [inputVal, setInputVal] = useState<string>(valueStr);

  useEffect(() => {
    setInputVal(valueStr);
  }, [valueStr])

  const onSelect = (e) => {
    onChange(Number(e.target.value));
  };

  const onChangeInput = (e) => {
    const maxSize = 256;
    const val = Number(e.target.value.replace(/\D/, ''));
    if (isNaN(val)) return;
    const size = Math.min(val, maxSize);
    setInputVal(String(size));
    onChange(size);
  };

  return (
    <div className={styles.container}>
      <TextField label="size" value={inputVal} onChange={onChangeInput} />
      <Select value={valueStr} onChange={onSelect}>
        {
          preparedSizes.map((size: string) => <MenuItem key={size} value={size}>{size}</MenuItem>)
        }
      </Select>
    </div>
  )
}