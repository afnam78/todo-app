import React, { useState } from 'react'
import { Task } from './Task'

export const Category = () => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        setCategories(['all', 'active', 'completed'])
    }, [])

    return (
        <div>{categories.map((category, index) => {
            return <div key={index}><Task data={category} /></div>
        })
        }
        </div>
    )

}
