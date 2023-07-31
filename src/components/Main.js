import React, { createRef, useEffect, useState } from 'react'
import { Category } from './Category'
import { Task } from './Task'

export const Main = () => {

  const [categories, setCategories] = useState([])
  const [category, setCategory] = useState()
  const [tasks, setTasks] = useState([])
  const [allTasks, setAllTasks] = useState('')
  const [name, setName] = useState([])
  const input = createRef()

  useEffect(() => {
    setCategories(['All', 'Active', 'Completed'])
    setCategory('Active')
    let localStorageTasks = localStorage.getItem('tasks')
    if (localStorageTasks) {
      setTasks(JSON.parse(localStorageTasks))
    }
    setAllTasks(tasks)
  }, [])

  useEffect(() => {
    getTasksByCategory(category)
  }, [category])



  const showCategory = (type) => {
    setCategory(type)
    getTasksByCategory(category)
  }

  const addTask = () => {
    if (name != '') {
      let tasks = getUpdatedTasks() ?? []

      let taskExists = tasks.find((task) => {
        return task.name === name
      }) ?? false;

      if (taskExists) {
        input.current.focus()
        input.current.style.border = '1px solid red'
        input.current.style.outline = 'none'
      } else {
        console.log('task does exist')
        input.current.style.border = '1px solid #000'
        tasks.push({ name: name, category: 'Active' })
        setAllTasks(tasks)
        setName('')
        localStorage.setItem('tasks', JSON.stringify(tasks))
        getTasksByCategory(category)
      }
    }
  }

  const handleChangeNAme = (evt) => {
    setName(evt.target.value)
  }

  const getTasksByCategory = (category) => {
    if (category === 'All') {
      setTasks(getUpdatedTasks())
    } else {
      let updatedTasks = getUpdatedTasks()
      let filteredTasks = updatedTasks.filter((task) => {
        return task.category === category
      }
      )
      setTasks(filteredTasks)
    }
  }

  const getUpdatedTasks = () => {
    let localStorageTasks = localStorage.getItem('tasks')
    if (localStorageTasks) {
      return JSON.parse(localStorageTasks)
    }
    return []
  }


  return (
    <div className='flex justify-center items-center '>
      <div className='w-fit border p-5 rounded-md bg-white shadow-md'>
        <div className='flex gap-2 justify-between border-b '>
          {
            categories.map((value, index) => {
              return <button key={index} className={'uppercase font-medium text-xl ' + (value === category ? 'border-blue-500 border-b-2' : 'border-white border-b-2')} onClick={() => showCategory(value)}>{value}</button>
            })
          }
        </div>

        <div className='flex justify-center gap-1 mt-3'>
          <input type='text' value={name} ref={input} className='border rounded-md px-2 py-1' onChange={(evt) => handleChangeNAme(evt)} />
          <button onClick={() => addTask()} className='bg-blue-500 text-sm px-2 py-1 rounded-lg hover:bg-blue-600 text-white font-semibold'>Add</button>
        </div>

        <div className='mt-2'>
          {
            tasks.map((value, index) => {
              return <div key={index}>
                <Task data={value} select={false} />
              </div>
            })
          }
        </div>
      </div>
    </div>
  )
}
