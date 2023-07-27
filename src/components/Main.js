import React, { useEffect, useState } from 'react'
import { Category } from './Category'
import { Task } from './Task'

export const Main = () => {

  const [categories, setCategories] = useState([])
  const [category, setCategory] = useState('All')
  const [tasks, setTasks] = useState([])
  const [allTasks, setAllTasks] = useState('')
  const [name, setName] = useState([])

  useEffect(() => {
    setCategories(['All', 'Active', 'Completed'])
    setCategory('All')
    setTasks(localStorage.getItem('tasks') && setTasks(JSON.parse(localStorage.getItem('tasks'))))
    setAllTasks(tasks)
  }, [])

  const showCategory = (category) => {
    setCategory(category)
  }

  const addTask = () => {
    setTasks([...tasks, name])
    localStorage.setItem('tasks', JSON.stringify(tasks))
    setName('')
  }

  const handleChangeNAme = (evt) => {
    setName(evt.target.value)
  }

  const getTaskByCategory = (category) => {
    if (category === 'All') {
      setTasks(allTasks)
    } else {
      setTasks(allTasks.filter(task => task.category === category))
    }
  }

  return (
    <div className='flex justify-center'>
      <div className='w-fit'>
        <div className='flex gap-2 justify-center border-b border-blue-500'>
          {
            categories.map((value, index) => {
              return <button key={index} className='uppercase font-medium' onClick={() => showCategory(value)}>{value}</button>
            })
          }
        </div>

        <div className='flex justify-center gap-1 mt-3'>
          <input type='text' className='border rounded-md px-2 py-1' onChange={(evt) => handleChangeNAme(evt)} />
          <button onClick={() => addTask()} className='bg-blue-500 text-sm px-2 py-1 rounded-lg hover:bg-blue-600 text-white font-semibold'>Add</button>
        </div>

        <div className='mt-2'>
          {tasks.map((value, index) => {
            <Task key={index} data={value} />
          }
          )}
        </div>
      </div>
    </div>
  )
}
