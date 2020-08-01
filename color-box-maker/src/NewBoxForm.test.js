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

  it('starts form with empty fields', () => {
    const { getByLabelText } = render(<NewBoxForm 
      formData={intialFormValue}
      changeHandler={mockFunction} 
      />);
    
      const widthInput = getByLabelText('Box Width (in pixels):');
      const heightInput = getByLabelText('Box Height (in pixels):');
      const boxBackgroundColorInput = getByLabelText('Box Background Color(hex code or valid css color name):');
      
      expect(widthInput.value).toBe('');
      expect(heightInput.value).toBe('');
      expect(boxBackgroundColorInput.value).toBe('');
  })

})
