import { render, screen, fireEvent } from '@testing-library/react';
import HeaderTareas from './headerTareas';

describe('HeaderTareas Component', () => {
    test('renders input and button', () => {
        render(<HeaderTareas onAddTask={jest.fn()} />);
        expect(screen.getByPlaceholderText('Agregar Tarea')).toBeInTheDocument();
        expect(screen.getByText('Agregar')).toBeInTheDocument();
    });

    test('calls onAddTask when the Add button is clicked', () => {
        const mockAddTask = jest.fn();
        render(<HeaderTareas onAddTask={mockAddTask} />);

        const input = screen.getByPlaceholderText('Agregar Tarea');
        const button = screen.getByText('Agregar');

        fireEvent.change(input, { target: { value: 'Nueva Tarea' } });
        fireEvent.click(button);

        expect(mockAddTask).toHaveBeenCalledWith('Nueva Tarea');
    });

    test('clears the input field after adding a task', () => {
        const mockAddTask = jest.fn();
        render(<HeaderTareas onAddTask={mockAddTask} />);

        const input = screen.getByPlaceholderText('Agregar Tarea');
        const button = screen.getByText('Agregar');

        fireEvent.change(input, { target: { value: 'Nueva Tarea' } });
        fireEvent.click(button);

        expect(input.value).toBe('');
    });
});
