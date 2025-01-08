import { render, screen, fireEvent } from '@testing-library/react';
import Tarea from './itemLista';

describe('Tarea Component', () => {
    test('renders the task title', () => {
        const mockTask = { title: 'Test Task', completed: false };
        render(<Tarea task={mockTask} />);
        expect(screen.getByText('Test Task')).toBeInTheDocument();
    });

    test('applies line-through style when completed', () => {
        const mockTask = { title: 'Completed Task', completed: true };
        render(<Tarea task={mockTask} />);
        const taskElement = screen.getByText('Completed Task');
        expect(taskElement).toHaveClass('line-through');
    });

    test('calls toggleTask when task is clicked', () => {
        const mockTask = { title: 'Clickable Task', completed: false };
        const toggleTaskMock = jest.fn();
        render(<Tarea task={mockTask} toggleTask={toggleTaskMock} />);

        const taskElement = screen.getByText('Clickable Task');
        fireEvent.click(taskElement);

        expect(toggleTaskMock).toHaveBeenCalledTimes(1);
    });

    test('calls deleteTask when delete button is clicked', () => {
        const mockTask = { title: 'Deletable Task', completed: false };
        const deleteTaskMock = jest.fn();
        render(<Tarea task={mockTask} deleteTask={deleteTaskMock} />);

        const deleteButton = screen.getByText('Eliminar');
        fireEvent.click(deleteButton);

        expect(deleteTaskMock).toHaveBeenCalledTimes(1);
    });
});
