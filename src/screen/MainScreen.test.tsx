import React from 'react';
import { render, fireEvent, RenderAPI } from '@testing-library/react-native';
import MainScreen from './MainScreen'; // Update the import path as needed

describe('MainScreen', () => {
  it('renders correctly', () => {
    const { getByPlaceholderText, getByText } = render(<MainScreen />);
    
    // Ensure that the input field and "ADD" button are rendered
    const inputElement = getByPlaceholderText('Type your comment');
    const addButton = getByText('ADD');
    
    expect(inputElement).toBeTruthy();
    expect(addButton).toBeTruthy();
  });
});
