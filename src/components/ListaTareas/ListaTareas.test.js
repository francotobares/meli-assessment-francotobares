import { render, screen, fireEvent } from '@testing-library/react';
import ListaTareas from './listaTareas';

describe('ListaTareas Component', () => {
    test('renders the header and input field', () => {
        render(<ListaTareas />);
        expect(screen.getByText('Lista de Tareas')).toBeInTheDocument();
        expect(screen.getByPlaceholderText('Agregar Tarea')).toBeInTheDocument();
    });

    test('allows adding a new task', () => {
        render(<ListaTareas />);
        const input = screen.getByPlaceholderText('Agregar Tarea');
        const button = screen.getByText('Agregar');

        fireEvent.change(input, { target: { value: 'Nueva Tarea' } });
        fireEvent.click(button);

        expect(screen.getByText('Nueva Tarea')).toBeInTheDocument();
    });

    test('toggles task completion', () => {
        render(<ListaTareas />);
        const input = screen.getByPlaceholderText('Agregar Tarea');
        const button = screen.getByText('Agregar');

        fireEvent.change(input, { target: { value: 'Tarea para completar' } });
        fireEvent.click(button);

        const task = screen.getByText('Tarea para completar');
        fireEvent.click(task);

        expect(task).toHaveClass('line-through');
    });

    test('deletes a task', () => {
        render(<ListaTareas />);
        const input = screen.getByPlaceholderText('Agregar Tarea');
        const button = screen.getByText('Agregar');

        fireEvent.change(input, { target: { value: 'Tarea para eliminar' } });
        fireEvent.click(button);

        const deleteButton = screen.getByText('Eliminar');
        fireEvent.click(deleteButton);

        expect(screen.queryByText('Tarea para eliminar')).not.toBeInTheDocument();
    });
});
