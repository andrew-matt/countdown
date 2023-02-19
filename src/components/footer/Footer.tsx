import { FC } from 'react';

import style from './Footer.module.scss';

import arrowRight from 'assets/icons/footer/arrow-right.svg';
import arrowRightDesktop from 'assets/icons/footer/desktop/arrow-right.svg';

export const Footer: FC = () => {
  return (
    <footer className={style.footer}>
      <div className={style['footer__input-wrapper']}>
        <input
          type="text"
          placeholder="Enter your Email and get notified"
          spellCheck={false}
        />
        <div className={style['footer__image-container']}>
          <picture>
            <source srcSet={arrowRightDesktop} media="(min-width: 1920px)" />
            <source srcSet={arrowRight} />
            <img src={arrowRight} alt="arrow-right" />
          </picture>
        </div>
      </div>
    </footer>
  );
};
