import './HeaderMenu.scss';

// import '../../../utils/i18n'
import { Link } from 'react-router-dom';
import { Routes } from 'utils';
import { useTranslation } from 'react-i18next';

const HeaderMenu = () => {
  const { t } = useTranslation()
  return (
    <div className="header__menu">
      <a href="#1" className="header__menu-link">
        Home
      </a>
      <Link to={Routes.projects} className="header__menu-link">
        {t("header.logout")}
      </Link>
      <Link to={Routes.dashboards} className="header__menu-link">
        Dashboards
      </Link>

    </div>
  );
};

export default HeaderMenu;
