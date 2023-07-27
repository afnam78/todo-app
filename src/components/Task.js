import React, { useEffect, useState } from 'react'


export const Task = ({data, select}) => {
    const category = data.category
    const name = data.name
    return (
        <div className={category == 'Completed' ? 'line-through' : undefined }>{name}</div>
    )
}
