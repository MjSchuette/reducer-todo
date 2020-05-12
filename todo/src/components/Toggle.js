import React from 'react'

export default function Toggle (props) {

    return (
        <div>
            <h2 
                onClick={(e) => {
                e.preventDefault()
                props.handleComplete(props.item.id)}} >
                {props.item.todo} 
            </h2>
        </div>
    )
} 