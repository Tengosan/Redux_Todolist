import React from 'react';

import LogoImage from 'Components/assets/logo.png';
import AddMenuButton from './AddMenuButton';
import FilterMenu from './FilterMenu';
import './Header.scss';

const Header = () => (
  <div className="header">
    <div className="header__logo">
      <img src={LogoImage} alt="logo" />
    </div>
    <div className="header__title">
      <span>ToDo Task Manager</span>
    </div>
    <div className="header__buttons">
      <AddMenuButton />
      <FilterMenu />
    </div>
  </div>
);

export default Header;
