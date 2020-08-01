import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import NewBoxForm from './NewBoxForm';

it('renders form without crashing', () => {
  render(<NewBoxForm formData={{width: '', height: '', boxBackgroundColor: ''}} />)
}) 

it('matches snapshot', () => {
  const { asFragment } = render(<NewBoxForm 
    formData={{width: '', height: '', boxBackgroundColor: ''}} 
    />);
    expect(asFragment()).toMatchSnapshot();
})