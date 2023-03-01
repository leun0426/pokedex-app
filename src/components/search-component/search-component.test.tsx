import { act, fireEvent, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { SearchComponent } from './search-component';

describe("Components - Search Test", () => {


  it('should render', async() => {
    const component = render(
      <SearchComponent 
        placeholder={''}
        handleSearch={()=>{}}
        id={''} />);
    
    expect(component).toBeTruthy();
  })

  it('should be able to type "test" in input and click button will send param to function', async() => {
    const handleSearch = (query: string | Object | null) => {
      expect(query).toEqual('test');
    }
    render(
      <SearchComponent
        placeholder={'Test placeholder'}
        handleSearch={handleSearch}
        id={'test'} />);
    const inputElement = screen.queryByPlaceholderText('Test placeholder');
  
    if (inputElement) {
      act(()=> {
        userEvent.type(inputElement, 'test');
        waitFor(() => {
          expect(inputElement).toHaveValue('test');
          const button = screen.queryByText('Search');
          if (button) {
            fireEvent.click(button);
          } else {
            expect(button).toBeTruthy();
          }
          
        });
      })
    } else {
      expect(inputElement).tuBeTruthy();
    }
  })
});
