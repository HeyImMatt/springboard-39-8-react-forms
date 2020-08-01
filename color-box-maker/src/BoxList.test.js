import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import BoxList from './BoxList'

it('renders BoxList without crashing', () => {
  render(<BoxList />);
}) 

