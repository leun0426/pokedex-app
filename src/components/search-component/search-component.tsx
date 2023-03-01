import React, { useState } from 'react';
import style from './search-component.module.css'
import { ButtonComponent } from '../button-component/button-component';
import { Input } from '@chakra-ui/react';

type SearchComponentProp = {
  placeholder: string;
  handleSearch: (query:string | Object | null) => void;
  id: string;
}

export const SearchComponent: React.FC<SearchComponentProp> = ({placeholder, id, handleSearch}) => {

  const [searchQuery, updateSearchQuery] = useState<string>('');

  function handleInputChange(event:React.SyntheticEvent) {
    updateSearchQuery((event.target as HTMLInputElement).value);
  }

  return (
    <>
      <div className={style.searchWrapper}>
        <Input className={style.searchInput} id={`${id}-input`} placeholder={placeholder} onChange={event => handleInputChange(event)}/>
        <ButtonComponent id={`${id}-button`} buttonName='Search' params={searchQuery} handleClick={handleSearch}></ButtonComponent>
      </div>
      
    </>
  )
}