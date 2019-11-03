import React, { Component } from 'react'
import "./Todo.css"

class AddTodo extends Component {
  state = {
    content: ''
  }
  handleChange = (e) => {
    this.setState({
      content: e.target.value
    });
  }
  handleSubmit = (e) => {
    e.preventDefault();
    // call function to add a todo
    this.props.addTodo(this.state);
    this.setState({
      content: ''
    })
  }
  render() {
    return (
      <div className="form">
        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder="Type your priority and press enter" onChange={this.handleChange} value={this.state.content} />
        </form>
      </div>
    )
  }
}

export default AddTodo;