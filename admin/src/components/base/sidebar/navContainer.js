import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const NavContainer = function({ upgrade, layout, path, icon, name, activeRoute }) {
    const { t } = useTranslation();
    return (
        <li className={ upgrade ? "active active-pro" : activeRoute(layout + path) }>
            <NavLink  to={layout + path} className="nav-link" activeClassName="active">
                <i className={icon} />
                <p>{t(name)}</p>
            </NavLink>
        </li>
    );
}

export default NavContainer;