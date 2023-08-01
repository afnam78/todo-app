import React, { useState, useEffect } from 'react'
import { Task } from './Task'

export const Category = ({ category }) => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        setCategories(['all', 'active', 'completed'])
    }, [])

    return (
        <div>
            {categories.map((category, index) => {
                return <div key={index}><Task data={category} /></div>
            })
            }
        </div>
    )

}
