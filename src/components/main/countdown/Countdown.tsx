import { FC } from 'react';

import style from './Countdown.module.scss';

import { Timer } from 'components/main/countdown/timer/Timer';

export const Countdown: FC = () => {
  return (
    <div className={style.countdown}>
      <div className={style.countdown__wrapper}>
        <h2 className={`${style.countdown__title} ${style.title}`}>Under Construction</h2>
        <p className={style.countdown__text}>
          We&apos;re making lots of improvements and will be back soon
        </p>
        <Timer />
      </div>
    </div>
  );
};
