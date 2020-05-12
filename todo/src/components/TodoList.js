import React from 'react';
import Toggle from './Toggle';

export default function TodoList (props) {
    return(
        <div>
            {props.state.map((item) => {
                return <Toggle item={item} key={item.id} handleComplete={props.handleComplete} />
            })}
        </div>
    )
};