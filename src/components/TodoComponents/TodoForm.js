import React from 'react';

const TodoForm = (props) => {
return (
    <div className='form-container'>
        <input  className = "itemField" />
        <button onClick={() => props.addItem({task: `${document.querySelector('input').value}`})}>Add Item to List</button>
        <button onClick={()=> props.clearCompleted()}>Clear Completed List Items</button>
    </div>
);
}
export default TodoForm;