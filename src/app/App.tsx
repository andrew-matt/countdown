import { FC, useState } from 'react';

import style from './App.module.scss';

import { Modal } from 'common/components/modal/Modal';
import { Footer } from 'components/footer/Footer';
import { Header } from 'components/header/Header';
import { Main } from 'components/main/Main';

export const App: FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalTitle, setModalTitle] = useState('');
  const [modalText, setModalText] = useState('');

  return (
    <div className={style.app}>
      <Header />
      <Main />
      <Modal show={showModal} onClose={() => setShowModal(false)} title={modalTitle}>
        <p>{modalText}</p>
      </Modal>
      <Footer
        setShowModal={setShowModal}
        setModalTitle={setModalTitle}
        setModalText={setModalText}
      />
    </div>
  );
};
