import React from 'react';

export default function TodoForm (props) {
    return(
        <div>
            <input
            name='todo'
            placeholder='Add Todo'
            />
            <button type='submit'>Add Todo</button>
        </div>
    )
}