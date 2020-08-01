import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import NewBoxForm from './NewBoxForm';

describe('NewBoxForm Component', () => {
  const mockFunction = jest.fn();
  const intialFormValue = {
    width: '', 
    height: '', 
    boxBackgroundColor: ''
  }

  it('renders form without crashing', () => {
    render(<NewBoxForm formData={intialFormValue} changeHandler={mockFunction} />)
  }) 

  it('matches snapshot', () => {
    const { asFragment } = render(<NewBoxForm 
      formData={intialFormValue}
      changeHandler={mockFunction} 
      />);
      expect(asFragment()).toMatchSnapshot();
  })
})
