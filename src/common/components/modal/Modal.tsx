import { FC, ReactNode, useCallback, useEffect } from 'react';

import style from './Modal.module.scss';

import cross from 'assets/icons/modal/cross.svg';

type ModalPropsType = {
  show: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
};

export const Modal: FC<ModalPropsType> = ({ show, onClose, title, children }) => {
  const closeOnEscapeKeyDown = useCallback(
    (event: KeyboardEvent): void => {
      if (event.key === 'Escape') {
        onClose();
      }
    },
    [onClose],
  );

  useEffect(() => {
    document.body.addEventListener('keydown', closeOnEscapeKeyDown);

    return function cleanup() {
      document.body.addEventListener('keydown', closeOnEscapeKeyDown);
    };
  }, [closeOnEscapeKeyDown]);

  return (
    <div
      className={`${style.modal} ${show && style.modal_shown}`}
      onClick={onClose}
      aria-hidden
    >
      <div
        className={style.modal__content}
        onClick={event => event.stopPropagation()}
        aria-hidden
      >
        <div className={style['modal__cross-icon']} onClick={onClose} aria-hidden>
          <img src={cross} alt="cross" />
        </div>
        <div className={style.modal__header}>
          <h4 className={style.modal__title}>{title}</h4>
        </div>
        <div className={style.modal__body}>{children}</div>
        <div className={style.modal__footer}>
          <button type="button" className={style.modal__button} onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
