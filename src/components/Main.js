import React, { useEffect, useState } from 'react'
import { Category } from './Category'
import { Task } from './Task'

export const Main = () => {

  const [categories, setCategories] = useState([])
  const [category, setCategory] = useState()
  const [tasks, setTasks] = useState([])
  const [allTasks, setAllTasks] = useState('')
  const [name, setName] = useState([])

  useEffect(() => {
    setCategories(['All', 'Active', 'Completed'])
    setCategory('Active')
    let localStorageTasks = localStorage.getItem('tasks')
    if (localStorageTasks) {
      setTasks(JSON.parse(localStorageTasks))
    }
    setAllTasks(tasks)
  }, [])

  const showCategory = (type) => {
    setCategory(type)
    console.log(category)
    getTasksByCategory(category)
  }

  const addTask = () => {
    if (name != '') {
      let type = 'Active';
      if (category != 'All') {
        type = category
      }
      tasks.push({ name: name, category: type })
      setAllTasks(tasks)
      localStorage.setItem('tasks', JSON.stringify(allTasks))
      setName('')
    }
  }

  const handleChangeNAme = (evt) => {
    setName(evt.target.value)
  }

  const getTasksByCategory = (category) => {
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
          <input type='text' value={name} className='border rounded-md px-2 py-1' onChange={(evt) => handleChangeNAme(evt)} />
          <button onClick={() => addTask()} className='bg-blue-500 text-sm px-2 py-1 rounded-lg hover:bg-blue-600 text-white font-semibold'>Add</button>
        </div>

        <div className='mt-2'>
          {
            tasks.map((value, index) => {
              return <div key={index} className='flex gap-5'>
                <input type='checkbox'  />
                <Task data={value} select={false} />
              </div>
            })
          }
        </div>
      </div>
    </div>
  )
}
