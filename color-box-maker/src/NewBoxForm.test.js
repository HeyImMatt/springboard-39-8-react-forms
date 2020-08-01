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
  const changedFormData = {...intialFormValue, width: '100'};

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

  it('tests form getting data', () => {
    const { getByLabelText, rerender } = render(<NewBoxForm 
      formData={intialFormValue}
      changeHandler={mockFunction} 
      />);
    
      const widthInput = getByLabelText('Box Width (in pixels):');
      const heightInput = getByLabelText('Box Height (in pixels):');
      const boxBackgroundColorInput = getByLabelText('Box Background Color(hex code or valid css color name):');
      
      expect(widthInput.value).toBe('');
      expect(heightInput.value).toBe('');
      expect(boxBackgroundColorInput.value).toBe('');

      fireEvent.change(widthInput, { target: { value: '100'}});

      rerender(<NewBoxForm 
        formData={changedFormData}
        changeHandler={mockFunction} 
        />);

      expect(mockFunction).toBeCalledTimes(1);
      expect(widthInput.value).toBe('100');
  }) 

})
