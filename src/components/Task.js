import React, { createRef, useEffect, useState } from 'react';

export const Task = ({ data, select }) => {
    const [name, setName] = useState(data.name);
    const [category, setCategory] = useState(data.category || 'Active'); // Establecemos 'Active' como valor por defecto para category
    const checkbox = createRef();

    useEffect(() => {
        setName(data.name);
        setCategory(data.category || 'Active'); // Actualizamos 'category' solo si 'data.category' no es undefined

        if (data.category === 'Completed') {
            checkbox.current.checked = true;
        }

    }, [data]);

    const taskCompleted = (evt) => {
        const newCategory = evt.target.checked ? 'Completed' : 'Active';
        setCategory(newCategory);
        updateLocalStorage(newCategory);
    };

    const updateLocalStorage = (newCategory) => {
        let tasks = JSON.parse(localStorage.getItem('tasks'));
        tasks.forEach((task) => {
            if (task.name === name) {
                task.category = newCategory;
            }
        });
        localStorage.setItem('tasks', JSON.stringify(tasks));
    };

    return (
        <div className='flex gap-1 items-center'>
            <input type='checkbox' onClick={taskCompleted} ref={checkbox} />
            <div className={category === 'Completed' ? 'line-through' : undefined}>{name}</div>
        </div>
    );
};
