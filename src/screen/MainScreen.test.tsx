import { render, fireEvent, waitFor } from '@testing-library/react-native';
import React from 'react';

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

  it('adds a new TODO item', async () => {
    const { getByPlaceholderText, getByText, getByTestId } = render(
      <MainScreen />,
    );

    const inputElement = getByPlaceholderText('Type your comment');
    const addButton = getByText('ADD');

    // Type a TODO item into the input field
    fireEvent.changeText(inputElement, 'Test Todo');

    // Trigger the "ADD" button click
    fireEvent.press(addButton);

    await waitFor(() => getByTestId('todo-item-0'));

    // Check if the new TODO item is added to the list
    const todoItem = getByTestId('todo-item-0'); // Assuming it's the first item added
    expect(todoItem).toBeTruthy();
  });
});
