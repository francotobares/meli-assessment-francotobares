import React, { useState, useEffect } from 'react';
import Tarea from '../ItemLista/itemLista';
import HeaderTareas from '../HeaderTareas/headerTareas';
import { loadTasksFromLocalStorage, saveTasksToLocalStorage } from '../../utils/LocalStorage';

function ListaTareas() {
    const [tasks, setTasks] = useState(loadTasksFromLocalStorage());

    useEffect(() => {
        saveTasksToLocalStorage(tasks);
    }, [tasks]);

    const addTask = (taskTitle) => {
        if (taskTitle.trim()) {
            const newTask = { title: taskTitle, completed: false };
            setTasks((prevTasks) => [...prevTasks, newTask]);
        }
    };

    const toggleTask = (index) => {
        const updatedTasks = tasks.map((task, i) =>
            i === index ? { ...task, completed: !task.completed } : task
        );
        setTasks(updatedTasks);
    };

    const deleteTask = (index) => {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    };

    return (
        <div className="min-h-screen bg-yellow-300 flex items-center justify-center">
            <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6">
                <h1 className="text-2xl font-bold text-gray-800 mb-4">Lista de Tareas</h1>
                <HeaderTareas onAddTask={addTask} />
                <div className="space-y-2 mt-12">
                    {tasks.map((task, index) => (
                        <Tarea
                            task={task}
                            key={index}
                            toggleTask={() => toggleTask(index)}
                            deleteTask={() => deleteTask(index)}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ListaTareas;
