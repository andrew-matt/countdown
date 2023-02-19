import { FC } from 'react';

import style from './App.module.scss';

import { Footer } from 'components/footer/Footer';
import { Header } from 'components/header/Header';
import { Main } from 'components/main/Main';

export const App: FC = () => {
  return (
    <div className={style.app}>
      <Header />
      <Main />
      <Footer />
    </div>
  );
};
