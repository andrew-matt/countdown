import { FC, ReactElement } from 'react';

import measureUnitBgDesktop from 'assets/images/countdown/desktop/measure-unit-bg.svg';
import measureUnitBg from 'assets/images/countdown/measure-unit-bg.svg';
import style from 'components/main/countdown/timer/timer_item/TimerItem.module.scss';

type TimerItemPropsType = {
  measureUnitValue: number;
  measureUnitType: string;
};

export const TimerItem: FC<TimerItemPropsType> = ({
  measureUnitValue,
  measureUnitType,
}) => {
  const thresholdValue = 10;

  const showColon = (): ReactElement | undefined => {
    if (measureUnitType !== 'SS' && measureUnitType !== 'Seconds') {
      return <div className={style['timer__value-colon']}>:</div>;
    }
  };

  return (
    <>
      <div>
        <div className={style.timer__value}>
          {measureUnitValue < thresholdValue ? `0${measureUnitValue}` : measureUnitValue}
        </div>
        <div className={style['timer__measure-unit']}>
          <picture>
            <source srcSet={measureUnitBgDesktop} media="(min-width: 1920px)" />
            <img src={measureUnitBg} alt="measure-unit-bg" />
          </picture>
          <div>{measureUnitType}</div>
        </div>
      </div>
      {showColon()}
    </>
  );
};
