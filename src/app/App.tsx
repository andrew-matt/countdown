import { FC } from 'react';

import { Header } from 'components/header/Header';
import { Main } from 'components/main/Main';

export const App: FC = () => {
  return (
    <>
      <Header />
      <Main />
    </>
  );
};
