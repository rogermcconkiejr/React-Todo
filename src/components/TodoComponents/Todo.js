import React from 'react';

const Todo = props => {
    return (
        <div>
        {/* // className = {`todo${props.item.completed ? ' completed' : ''}`}
        // onClick={()=> props.toggleItem(props.item.id)}>
        //     <p>{props.item.name}</p> */}
        <li className = {`todo${props.isComplete ? ' completed' : ''}`} onClick = {()=> props.toggleItem(props.id)} >{props.itemProp}</li>
        
        </div>
    )
}

export default Todo;