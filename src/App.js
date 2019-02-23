import React, { Component } from 'react';
import uuid from 'uuid';
import Todos from './components/Todos';
import Header from './components/layout/Header';
import AddTodo from './components/AddTodo';
import './App.css';

class App extends Component {
  state = {
    todos: [
      {
        id: uuid.v4(),
        title: 'take out the trash',
        completed: false
      },
      {
        id: uuid.v4(),
        title: 'Clean the car',
        completed: false
      },
      {
        id: uuid.v4(),
        title: 'Clean the Kitchen',
        completed: false
      }
    ]
  }
  //Toggle complete
  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo;
      })
    })
  }

  //Delete Todo
  delTodo = (id) => {
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] });
  }
  //Add Todo
  addTodo=(title) =>{
    const newTodo= {
      id:uuid.v4(),
      title:title,
      completed:false

    }
    this.setState({todos:[...this.state.todos, newTodo]})
  }
  render() {
    return (
      <div className="App">
        <div className="container">
          <Header />
          <AddTodo addTodo={this.addTodo}/>
          <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo} />
        </div>
      </div>
    );
  }
}

export default App;
