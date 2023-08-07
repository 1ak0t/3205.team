import Input from '../input/input';
import './search-form.scss';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {BounceLoader} from 'react-spinners';
import {setLoadingStatus} from '../../store/action';
import React, {useState} from 'react';
import {fetchSearchResults} from '../../services/api-actions';

function SearchForm() {
  const isLoading = useAppSelector(state => state.isLoading);
  const dispatch = useAppDispatch();
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isSubmitButtonActive, setSubmitButtonActive] = useState(false);

  const submitButtonHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(setLoadingStatus(true));
    console.log(event.target)
    dispatch(fetchSearchResults({email: "jim@gmail.com", number: "221122"}))
  }

  const changePhoneHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputPhone = event.target.value;
    setPhoneNumber(inputPhone
        .replace(/\D/g, '')
        .replace(/(\d)(\d)(?!$)/g, '$1$2-'));
  }

  const inputEmailHandler = (event: React.FocusEvent<HTMLInputElement>) => {
    if (!event.target.value.toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )) {
      event.target.classList.add('wrong-email');
      setSubmitButtonActive(true);
    } else {
      event.target.classList.remove('wrong-email');
      setSubmitButtonActive(false);
    }
  }

  return(
      <>
        <form action="" className="search-form" onSubmit={submitButtonHandler}>
          <Input label={"Email"} id={"email"} name={"email"} type={"text"} placeholder={"mail@example.com"} required={true} onBlurHandler={inputEmailHandler} />
          <Input label={"Phone number"} id={"phone"} name={"phone"} type={"text"} onChangeHandler={changePhoneHandler} value={phoneNumber} />
          <Input id={"submit"} name={"submit"} type={"submit"} value={"Send"} disabled={isSubmitButtonActive}/>
          <BounceLoader color="#2731e5" loading={isLoading} />
        </form>

      </>
  );
}

export default SearchForm;
