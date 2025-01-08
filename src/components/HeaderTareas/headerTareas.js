
import React, { useState } from 'react';

function HeaderTareas({ onAddTask }) {
    const [taskInput, setTaskInput] = useState('');

    const handleInputChange = (event) => {
        setTaskInput(event.target.value);
    };

    const handleKeyPress = (event) => {
        if (event.key === 'Enter' && taskInput.trim()) {
            onAddTask(taskInput);
            setTaskInput(''); 
        }
    };

    const handleClick = () => {
        if (taskInput.trim()) {
            onAddTask(taskInput); 
            setTaskInput(''); 
        }
    };

    return (
        <div className="flex items-center gap-2 mb-4">
            <input
                type="text"
                placeholder="Agregar Tarea"
                value={taskInput}
                onChange={handleInputChange}
                onKeyDown={handleKeyPress}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none text-black focus:ring-2 focus:ring-blue-500"
            />
            <button
                onClick={handleClick}
                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
            >
                Agregar
            </button>
        </div>
    );
}

export default HeaderTareas;
