import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
import './components/TodoComponents/Todo.css';

class App extends React.Component {
  constructor () {
    super();
    this.state = {
      data: [
        {
          task: 'Organize Garage',
          id: 1528817077286,
          completed:false
        },
        {
          task: 'Bake Cookies',
          id: 1528817084358,
          completed: false
        }
      ]
    };
  }

  addItem = (item) => {
    let newState = {};
    const newItem = {...item, id:Date.now()};
    newState = {data: [...this.state.data, newItem]};
    this.setState(newState);
  };

  toggleItem = id => {
    this.setState({
      data: this.state.data.map(item => {
        if (item.id === id) {
          return {
            ...item,
            completed: !item.completed
          };
        } else {
          return item;
        }
      })
    });
  };

  clearCompleted = () => {
    this.setState({
      data: this.state.data.filter(item => !item.completed)
    });
  };
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
console.log(this.state)
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList
          listProps={this.state}
          toggleItem={this.toggleItem}
        />
        <TodoForm addItem = {this.addItem} listProps ={this.state}
          clearCompleted ={this.clearCompleted}
        />
      </div>
    );
  }
}

export default App;
