import './Button.scss';

import React from 'react';

interface IButtonProps {
  children: string;
  onClickBtn: React.MouseEventHandler;
  style: string
}

const Button: React.FC<IButtonProps> =
  ({ children, onClickBtn, style = '' }) => {
    return (
      <button className={`btn ${style}`} onClick={onClickBtn}>
        {children}
      </button>
    );
  };

export default Button;
