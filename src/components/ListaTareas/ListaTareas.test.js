import { render, screen, fireEvent } from '@testing-library/react';
import ListaTareas from './listaTareas';
import '@testing-library/jest-dom';
import { loadTasksFromLocalStorage, saveTasksToLocalStorage } from '../../utils/LocalStorage';

// Mock the localStorage utility functions
jest.mock('../../utils/LocalStorage', () => ({
  loadTasksFromLocalStorage: jest.fn(),
  saveTasksToLocalStorage: jest.fn(),
}));

describe('ListaTareas Component', () => {
  beforeEach(() => {
    // Reset the mock implementations before each test
    loadTasksFromLocalStorage.mockClear();
    saveTasksToLocalStorage.mockClear();
  });

  it('loads tasks from localStorage on initial render', () => {
    const mockTasks = [
      { title: 'Task 1', completed: false },
      { title: 'Task 2', completed: true },
    ];
    loadTasksFromLocalStorage.mockReturnValue(mockTasks);

    render(<ListaTareas />);

    // Check if the tasks are loaded and displayed
    const taskElements = screen.getAllByText(/Task/);
    expect(taskElements.length).toBe(2);
    expect(taskElements[0]).toHaveTextContent('Task 1');
    expect(taskElements[1]).toHaveTextContent('Task 2');
  });

  it('adds a new task when the addTask function is called', () => {
    loadTasksFromLocalStorage.mockReturnValue([]);

    render(<ListaTareas />);

    const inputField = screen.getByPlaceholderText('Agregar Tarea');
    const addButton = screen.getByLabelText('Add New Task');

    fireEvent.change(inputField, { target: { value: 'New task' } });
    fireEvent.click(addButton);

    // Check if the new task is added to the task list
    const newTaskElement = screen.getByText('New task');
    expect(newTaskElement).toBeInTheDocument();

    // Ensure saveTasksToLocalStorage is called after adding a task
    expect(saveTasksToLocalStorage).toHaveBeenCalledWith([
      { title: 'New task', completed: false },
    ]);
  });

  it('toggles the task completion when checkbox is clicked', () => {
    const mockTasks = [
      { title: 'Task 1', completed: false },
    ];
    loadTasksFromLocalStorage.mockReturnValue(mockTasks);

    render(<ListaTareas />);

    const checkbox = screen.getByRole('checkbox');
    fireEvent.click(checkbox);

    // Check if the task's completed state is toggled
    const taskElement = screen.getByText('Task 1');
    expect(taskElement).toHaveClass('text-gray-500');

    // Ensure saveTasksToLocalStorage is called after toggling
    expect(saveTasksToLocalStorage).toHaveBeenCalledWith([
      { title: 'Task 1', completed: true },
    ]);
  });

  it('deletes a task when the delete button is clicked', () => {
    const mockTasks = [
      { title: 'Task 1', completed: false },
    ];
    loadTasksFromLocalStorage.mockReturnValue(mockTasks);

    render(<ListaTareas />);

    const deleteButton = screen.getByLabelText('Delete Task');
    fireEvent.click(deleteButton);

    // Ensure the task is removed from the DOM
    const taskElements = screen.queryAllByText('Task 1');
    expect(taskElements.length).toBe(0);

    // Ensure saveTasksToLocalStorage is called after deleting
    expect(saveTasksToLocalStorage).toHaveBeenCalledWith([]);
  });

  it('saves tasks to localStorage after tasks are added, toggled, or deleted', () => {
    loadTasksFromLocalStorage.mockReturnValue([]);

    render(<ListaTareas />);

    const inputField = screen.getByPlaceholderText('Agregar Tarea');
    const addButton = screen.getByLabelText('Add New Task');
    fireEvent.change(inputField, { target: { value: 'New task' } });
    fireEvent.click(addButton);

    // Ensure tasks are saved to localStorage after adding
    expect(saveTasksToLocalStorage).toHaveBeenCalled();

    const checkbox = screen.getByRole('checkbox');
    fireEvent.click(checkbox);

    // Ensure tasks are saved after toggling
    expect(saveTasksToLocalStorage).toHaveBeenCalled();

    const deleteButton = screen.getByLabelText('Delete Task');
    fireEvent.click(deleteButton);

    // Ensure tasks are saved after deleting
    expect(saveTasksToLocalStorage).toHaveBeenCalled();
  });
});
