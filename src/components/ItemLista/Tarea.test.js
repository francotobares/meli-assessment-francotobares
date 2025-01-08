import { render, screen, fireEvent } from '@testing-library/react';
import Tarea from './itemLista';
import '@testing-library/jest-dom';

describe('Tarea Component', () => {
  it('renders the task title correctly and capitalizes the first letter', () => {
    const task = { title: 'test task', completed: false };
    const mockToggleTask = jest.fn();
    const mockDeleteTask = jest.fn();

    render(<Tarea task={task} toggleTask={mockToggleTask} deleteTask={mockDeleteTask} />);
    
    const taskTitle = screen.getByText('Test task');
    expect(taskTitle).toBeInTheDocument();
  });

  it('applies the correct styles when task is completed', () => {
    const task = { title: 'completed task', completed: true };
    const mockToggleTask = jest.fn();
    const mockDeleteTask = jest.fn();

    render(<Tarea task={task} toggleTask={mockToggleTask} deleteTask={mockDeleteTask} />);

    const taskElement = screen.getByText('Completed task');
    expect(taskElement).toHaveClass('text-gray-500');
  });

  it('calls toggleTask when checkbox is clicked', () => {
    const task = { title: 'Test task', completed: false };
    const mockToggleTask = jest.fn();
    const mockDeleteTask = jest.fn();

    render(<Tarea task={task} toggleTask={mockToggleTask} deleteTask={mockDeleteTask} />);

    const checkbox = screen.getByRole('checkbox');
    fireEvent.click(checkbox);
    
    expect(mockToggleTask).toHaveBeenCalledTimes(1);
  });

  it('calls deleteTask when delete button is clicked', () => {
    const task = { title: 'Test task', completed: false };
    const mockToggleTask = jest.fn();
    const mockDeleteTask = jest.fn();

    render(<Tarea task={task} toggleTask={mockToggleTask} deleteTask={mockDeleteTask} />);

    const deleteButton = screen.getByLabelText('Delete Task');
    fireEvent.click(deleteButton);
    
    expect(mockDeleteTask).toHaveBeenCalledTimes(1);
  });
});
