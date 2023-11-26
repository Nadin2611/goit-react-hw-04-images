import { useState } from 'react';
import { ImSearch } from 'react-icons/im';
import { toast } from 'react-toastify';

import {
  Header,
  SearchForm,
  SearchButton,
  SearchButtonLabel,
  Input,
} from './Searchbar.styled';

export const SearchBar = ({ onGetSearchValue }) => {
  const [searchName, setSearchName] = useState('');

  const handleChange = event => setSearchName(event.target.value);

  const handleSubmit = event => {
    event.preventDefault();

    if (searchName.trim() === '') {
      return toast.warn('Please enter text!');
    }

    onGetSearchValue(searchName);
    setSearchName('');
  };

  return (
    <Header>
      <SearchForm onSubmit={handleSubmit}>
        <SearchButton type="submit">
          <ImSearch />
          <SearchButtonLabel>Search</SearchButtonLabel>
        </SearchButton>

        <Input
          onChange={handleChange}
          type="text"
          autoComplete="off"
          value={searchName}
          autoFocus
          placeholder="Search images and photos"
        />
      </SearchForm>
    </Header>
  );
};
