import React, { useEffect, useState } from 'react'


export const Task = ({data}) => {
    const category = data

    return (
        <div>{category}</div>
    )
}
