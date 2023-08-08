import Input from '../input/input';
import './search-form.scss';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {BounceLoader} from 'react-spinners';
import {clearSearchResults, setLoadingStatus} from '../../store/action';
import React, {useState} from 'react';
import {fetchSearchResults} from '../../services/api-actions';
import SearchResult from '../search-result/search-result';

function SearchForm() {
  const isLoading = useAppSelector(state => state.isLoading);
  const dispatch = useAppDispatch();
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isSubmitButtonActive, setSubmitButtonActive] = useState(true);
  const searchResults = useAppSelector(state => state.searchResults);
  const error = useAppSelector(state => state.error);

  const submitButtonHandler = (event: React.BaseSyntheticEvent) => {
    event.preventDefault();
    dispatch(clearSearchResults);
    dispatch(setLoadingStatus(true));
    dispatch(fetchSearchResults({email: event?.target[0].value, number: event?.target[1].value.replace(/\D/g, '')}));
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
        <form className="search-form" onSubmit={submitButtonHandler}>
          <Input label={"Email"} id={"email"} name={"Email"} type={"text"} placeholder={"mail@example.com"} required={true} onBlurHandler={inputEmailHandler}/>
          <Input label={"Number"} id={"phone"} name={"Number"} type={"text"} onChangeHandler={changePhoneHandler} value={phoneNumber} />
          <Input id={"submit"} name={"Button"} type={"submit"} value={"Send"} disabled={isSubmitButtonActive}/>
          <BounceLoader color="#2731e5" loading={isLoading} />
          {searchResults.length > 0 && !isLoading && !error ? <SearchResult searchResults={searchResults} /> : ''}
        </form>
      </>
  );
}

export default SearchForm;
