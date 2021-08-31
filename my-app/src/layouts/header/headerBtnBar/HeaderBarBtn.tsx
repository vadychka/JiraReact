import './HeaderBarBtn.scss';

import { observer } from 'mobx-react-lite';
import React from 'react';

interface IHeaderBarBtnProps {
  onClick: () => void
}

export const sideBarShow = false;
const HeaderBarBtn: React.FC<IHeaderBarBtnProps> = ({ onClick }) => {
  return (
    <div className="header__bar-btn" onClick={onClick}>
      <span className="header__bar-btn--default"></span>
    </div>
  );
};

export default observer(HeaderBarBtn);
