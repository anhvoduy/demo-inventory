import React from 'react';
import { useTranslation } from 'react-i18next';
import logo from 'assets/img/reactlogo.png';

const LogoContainer = function() {
    const { t } = useTranslation();
    return (
        <div className='logo'>
            <a  href='https://www.creative-tim.com?ref=lbd-sidebar' 
                className='simple-text logo-mini'>
                <div className='logo-img'>
                    <img src={logo} alt='logo_image' />
                </div>
            </a>
            <a  href='https://www.creative-tim.com?ref=lbd-sidebar'
                className='simple-text logo-normal'>
                {t('inventory')}
            </a>
        </div>
    )
}

export default LogoContainer;