import { FC } from 'react';

import style from './Main.module.scss';

import { Countdown } from 'components/main/countdown/Countdown';

export const Main: FC = () => {
  return (
    <main>
      <div className={style.container}>
        <Countdown />
      </div>
    </main>
  );
};
