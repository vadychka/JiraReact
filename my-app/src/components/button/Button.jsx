import './Button.scss';

import React from 'react';

const Button = ({children, onClickBtn, style = ''}) => {
  return (
    <button className={`btn ${style}`} onClick={onClickBtn}>
      {children}
    </button>
  );
};

export default Button;
