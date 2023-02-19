import { FC } from 'react';

import style from './Countdown.module.scss';

import buttonArrow from 'assets/icons/countdown/button-arrow.svg';
import { Timer } from 'components/main/countdown/timer/Timer';

export const Countdown: FC = () => {
  return (
    <div className={style.countdown}>
      <div className={style.countdown__wrapper}>
        <h2 className={`${style.countdown__title} ${style.title}`}>Under Construction</h2>
        <p className={`${style.countdown__text} ${style.text}`}>
          We&apos;re making lots of improvements and will be back soon
        </p>
        <Timer />
        <p className={`${style['countdown__event-text']} ${style.text}`}>
          Check our event page when you wait:
        </p>
        <a
          href="https://leadentrepreneursummit.com"
          target="_blank"
          rel="noreferrer"
          className={style.countdown__link}
        >
          <span>Go to the event</span>
          <img src={buttonArrow} alt="button-arrow" />
        </a>
      </div>
    </div>
  );
};
