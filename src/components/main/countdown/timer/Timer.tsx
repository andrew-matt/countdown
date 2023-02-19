import { FC, useEffect, useState } from 'react';

import { useWindowDimensions } from 'common/hooks/hooks';
import style from 'components/main/countdown/timer/Timer.module.scss';
import { TimerItem } from 'components/main/countdown/timer/timer_item/TimerItem';

export const Timer: FC = () => {
  const desktopBreakpoint = 1920;
  const { width } = useWindowDimensions();

  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const deadline = 'May, 31, 2023';

  const millisecondsInASecond = 1000;
  const secondsInAMinute = 60;
  const minutesInAHour = secondsInAMinute;
  const hoursInADay = 24;

  const getTime = (deadline: string): void => {
    const time = Date.parse(deadline) - Date.now();

    setDays(
      Math.floor(
        time / (millisecondsInASecond * secondsInAMinute * minutesInAHour * hoursInADay),
      ),
    );
    setHours(
      Math.floor(
        (time / (millisecondsInASecond * secondsInAMinute * minutesInAHour)) %
          hoursInADay,
      ),
    );
    setMinutes(
      Math.floor((time / millisecondsInASecond / secondsInAMinute) % secondsInAMinute),
    );
    setSeconds(Math.floor((time / millisecondsInASecond) % secondsInAMinute));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (Date.now() < Date.parse(deadline)) {
        getTime(deadline);
      } else {
        clearInterval(interval);
      }
    }, millisecondsInASecond);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={style.timer}>
      <TimerItem
        measureUnitValue={days}
        measureUnitType={width < desktopBreakpoint ? 'DD' : 'Days'}
      />
      <TimerItem
        measureUnitValue={hours}
        measureUnitType={width < desktopBreakpoint ? 'HH' : 'Hours'}
      />
      <TimerItem
        measureUnitValue={minutes}
        measureUnitType={width < desktopBreakpoint ? 'MM' : 'Minutes'}
      />
      <TimerItem
        measureUnitValue={seconds}
        measureUnitType={width < desktopBreakpoint ? 'SS' : 'Seconds'}
      />
    </div>
  );
};
