import { Component } from 'react';
import { ImSearch } from 'react-icons/im';
import { toast } from 'react-toastify';

import {
  Header,
  SearchForm,
  SearchButton,
  SearchButtonLabel,
  Input,
} from './Searchbar.styled';

export class SearchBar extends Component {
  state = {
    searchName: '',
  };

  handleChange = event => {
    this.setState({ searchName: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();

    if (this.state.searchName.trim() === '') {
      return toast.warn('Please enter text!');
    }

    this.props.onGetSearchValue(this.state.searchName);
    this.setState({ searchName: '' });
  };

  render() {
    return (
      <Header>
        <SearchForm onSubmit={this.handleSubmit}>
          <SearchButton type="submit">
            <ImSearch />
            <SearchButtonLabel>Search</SearchButtonLabel>
          </SearchButton>

          <Input
            onChange={this.handleChange}
            type="text"
            autoComplete="off"
            value={this.state.searchName}
            autoFocus
            placeholder="Search images and photos"
          />
        </SearchForm>
      </Header>
    );
  }
}
