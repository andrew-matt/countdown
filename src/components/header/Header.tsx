import { FC } from 'react';

import style from './Header.module.scss';

import topLeftCornerDesktop from 'assets/images/header/desktop/top-left-corner.svg';
import topRightCornerDesktop from 'assets/images/header/desktop/top-right-corner.svg';
import logoMobile from 'assets/images/header/mobile/logo.svg';
import topLeftCornerMobile from 'assets/images/header/mobile/top-left-corner.svg';
import topRightCornerMobile from 'assets/images/header/mobile/top-right-corner.svg';
import logoTablet from 'assets/images/header/tablet/logo.svg';
import topLeftCornerTablet from 'assets/images/header/tablet/top-left-corner.svg';
import topRightCornerTablet from 'assets/images/header/tablet/top-right-corner.svg';

export const Header: FC = () => {
  return (
    <header className={style.header}>
      <picture>
        <source srcSet={topLeftCornerDesktop} media="(min-width: 1920px)" />
        <source srcSet={topLeftCornerTablet} media="(min-width: 768px)" />
        <source srcSet={topLeftCornerMobile} media="(max-width: 767px)" />
        <img src={topLeftCornerMobile} alt="top-left-corner" />
      </picture>
      <a href="https://andrew-matt.github.io/countdown">
        <picture>
          <source srcSet={logoMobile} media="(max-width: 767px)" />
          <source srcSet={logoTablet} media="(min-width: 768px)" />
          <img src={logoMobile} alt="logo" />
        </picture>
      </a>
      <picture>
        <source srcSet={topRightCornerDesktop} media="(min-width: 1920px)" />
        <source srcSet={topRightCornerTablet} media="(min-width: 768px)" />
        <source srcSet={topRightCornerMobile} media="(max-width: 767px)" />
        <img src={topRightCornerMobile} alt="top-right-corner" />
      </picture>
    </header>
  );
};
