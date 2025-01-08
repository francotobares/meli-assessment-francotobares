import { render, screen, fireEvent } from '@testing-library/react';
import HeaderTareas from './headerTareas';
import '@testing-library/jest-dom';

describe('HeaderTareas Component', () => {
  it('updates the input field value on typing', () => {
    const mockOnAddTask = jest.fn();
    render(<HeaderTareas onAddTask={mockOnAddTask} />);

    const input = screen.getByPlaceholderText('Agregar Tarea');
    fireEvent.change(input, { target: { value: 'New task' } });

    expect(input.value).toBe('New task');
  });

  it('calls onAddTask and clears input when "Agregar" button is clicked', () => {
    const mockOnAddTask = jest.fn();
    render(<HeaderTareas onAddTask={mockOnAddTask} />);

    const input = screen.getByPlaceholderText('Agregar Tarea');
    fireEvent.change(input, { target: { value: 'New task' } });

    const button = screen.getByLabelText('Add New Task');
    fireEvent.click(button);

    expect(mockOnAddTask).toHaveBeenCalledWith('New task');
    expect(input.value).toBe('');
  });

  it('calls onAddTask and clears input when Enter key is pressed', () => {
    const mockOnAddTask = jest.fn();
    render(<HeaderTareas onAddTask={mockOnAddTask} />);

    const input = screen.getByPlaceholderText('Agregar Tarea');
    fireEvent.change(input, { target: { value: 'New task' } });

    fireEvent.keyDown(input, { key: 'Enter', code: 'Enter' });

    expect(mockOnAddTask).toHaveBeenCalledWith('New task');
    expect(input.value).toBe('');
  });

  it('does not call onAddTask if input is empty when clicking the "Agregar" button', () => {
    const mockOnAddTask = jest.fn();
    render(<HeaderTareas onAddTask={mockOnAddTask} />);

    const button = screen.getByLabelText('Add New Task');
    fireEvent.click(button);

    expect(mockOnAddTask).not.toHaveBeenCalled();
  });

  it('does not call onAddTask if input is empty when pressing Enter', () => {
    const mockOnAddTask = jest.fn();
    render(<HeaderTareas onAddTask={mockOnAddTask} />);

    const input = screen.getByPlaceholderText('Agregar Tarea');
    fireEvent.keyDown(input, { key: 'Enter', code: 'Enter' });

    expect(mockOnAddTask).not.toHaveBeenCalled();
  });
});
