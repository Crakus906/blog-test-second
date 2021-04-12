import React from 'react';
import cn from 'classnames';
import { Button as ButtonAntd } from 'antd';

import './style.scss'

export default function Button(props) {
  const {
    disabled,
    value,
    type,
    onClick,
    className,
    children,
  } = props;

  return (
    <ButtonAntd
      className={cn('button',className)}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {value}
      {children}
    </ButtonAntd>
  );
}
