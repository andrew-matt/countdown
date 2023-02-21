import { ChangeEvent, FC, FormEvent, useState } from 'react';

import style from './Footer.module.scss';

import arrowRight from 'assets/icons/footer/arrow-right.svg';
import arrowRightDesktop from 'assets/icons/footer/desktop/arrow-right.svg';
import { subscribe } from 'async/async';

type FooterPropsType = {
  setShowModal: (value: boolean) => void;
  setModalTitle: (title: string) => void;
  setModalText: (text: string) => void;
};

export const Footer: FC<FooterPropsType> = ({
  setShowModal,
  setModalTitle,
  setModalText,
}) => {
  const [inputValue, setInputValue] = useState('');
  const [inputError, setInputError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onInputChangeHandler = (event: ChangeEvent<HTMLInputElement>): void => {
    setInputError(null);
    setInputValue(event.currentTarget.value);
  };

  const validateEmail = (email: string): boolean => {
    const regExp =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    return regExp.test(String(email).toLowerCase());
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault();

    if (inputValue === '') {
      setInputError('Email is required');
    } else if (!validateEmail(inputValue)) {
      setInputError('Invalid email address');
    } else {
      try {
        setIsSubmitting(true);
        setInputValue('');
        const promise = await subscribe(inputValue);

        if (typeof promise === 'object') {
          setModalTitle('Success!');
          setModalText('You have successfully subscribed to the email newsletter');
        } else {
          setModalTitle('Failure!');
          setModalText(promise);
        }
      } catch (error) {
        setModalTitle('Error!');
        setModalText('Sorry, some error occurred...');
      } finally {
        setIsSubmitting(false);
        setShowModal(true);
      }
    }
  };

  return (
    <footer className={style.footer}>
      <form onSubmit={handleSubmit}>
        <div className={style['footer__input-wrapper']}>
          {inputError && (
            <div className={style['footer__input-error-wrapper']}>
              <div className={style['footer__input-error']}>{inputError}</div>
            </div>
          )}
          <input
            type="text"
            placeholder="Enter your Email and get notified"
            spellCheck={false}
            value={inputValue}
            onChange={onInputChangeHandler}
            onBlur={() => setInputError(null)}
          />
          <button
            type="submit"
            disabled={isSubmitting}
            className={style['footer__submit-button']}
          >
            <picture>
              <source srcSet={arrowRightDesktop} media="(min-width: 1920px)" />
              <source srcSet={arrowRight} />
              <img src={arrowRight} alt="arrow-right" />
            </picture>
          </button>
        </div>
      </form>
    </footer>
  );
};
