import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { ButtonComponent } from './button-component';

describe("Components - Button Test", () => {
  const buttonName = "Button Test Name";

  let testValue = ""
  const handleClick = (value :string ) => {
    testValue = `${value} ${value}`;
  }

  const testParam = "test"

  it('should render', async() => {
    const renderApp = render(
      <ButtonComponent 
        id="test-button"
        buttonName={buttonName}
        params={testParam}
        handleClick={()=> handleClick}/>);
    expect(renderApp).toBeTruthy();
  })

  it('should have name "Button Test Name"', async() => {
    render(
      <ButtonComponent
        id="test-button"
        buttonName={buttonName}
        params={testParam}
        handleClick={() => handleClick} />);
    const button = screen.getByText('Button Test Name');
    expect(button).toBeTruthy()
  })

  it('should run handleClick function when clicked on', async() => {
     render(
      <ButtonComponent
        id="test-button"
        buttonName={buttonName}
        params={testParam}
        handleClick={() => handleClick(testParam)} />);
    const button = screen.getByText('Button Test Name');
    fireEvent.click(button);
    expect(testValue).toEqual("test test");
  });

});
