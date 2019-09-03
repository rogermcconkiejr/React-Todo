// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo';


const TodoList = props => {
const list = props.listProps;

console.log(props.todos);
return (
    <div className="list-container">
        <ol className="ordered-list">
            {list.data.map(item =>(
                    <Todo id = {item.id} itemProp = {item.task} isComplete ={item.completed} toggleItem={props.toggleItem}/>
            ))}
         </ol>
    </div>
);
}

export default TodoList;