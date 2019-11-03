import React, { Component } from 'react';
import Todos from './Todos'
import AddTodo from './AddTodo'

class MainTodoApp extends Component {
  state = {
    todos: [
        {id: 1, content: 'This is your priority list example'},
        {id: 2, content: 'Click for complete it'}
    ]
  }
  deleteTodo = (id) => {
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id
    });
    this.setState({
      todos
    });
  }

  addTodo = (todo) => {
    todo.id = Math.random();
    let todos = [...this.state.todos, todo];
    this.setState({
      todos
    });
  }

  render() {
    return (
      <div className="todo-app"> 
        <AddTodo addTodo={this.addTodo} />
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
      </div>
    );
  }
}
export default MainTodoApp;