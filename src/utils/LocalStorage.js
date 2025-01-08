export const loadTasksFromLocalStorage = () => {
    const savedTasks = localStorage.getItem('tasks');
    console.log(savedTasks)
    return savedTasks ? JSON.parse(savedTasks) : [];
};

export const saveTasksToLocalStorage = (tasks) => {
    console.log(tasks)
    localStorage.setItem('tasks', JSON.stringify(tasks));
};