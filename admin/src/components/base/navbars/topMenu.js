import React from 'react';
import { Navbar } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

const TopMenu = function({ brandText }) {
  const { t } = useTranslation();
  return (
    <Navbar.Brand>
      <a href='#pablo'>{t(brandText)}</a>
    </Navbar.Brand>
  );
}

export default TopMenu;