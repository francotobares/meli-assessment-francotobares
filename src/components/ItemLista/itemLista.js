import { TrashIcon } from '@heroicons/react/24/solid';

function Tarea({ task, toggleTask, deleteTask }) {
    const capitalizeFirstLetter = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    };

    return (
        <div
            className={`flex items-center text-black justify-between p-3 rounded-lg border ${
                task.completed ? 'bg-green-100 border-green-300' : 'bg-gray-100 border-gray-300'
            } transition`}
        >
            <input
                type="checkbox"
                checked={task.completed}
                onChange={toggleTask} 
                className="mr-4 cursor-pointer h-5 w-5"
            />
            <span
                className={`text-left flex-grow ${task.completed ? 'text-gray-500' : ''}`}
            >
                {capitalizeFirstLetter(task.title)}
            </span>
            <button
                onClick={deleteTask}
                className="text-red-500 hover:text-red-700 hover:bg-red-100 p-2 rounded-full transition"
            >
                <TrashIcon className="h-5 w-5" />
            </button>
        </div>
    );
}

export default Tarea;
