import React from 'react'
import TodoList from './TodoList'
import Form from './Form'

export default class App extends React.Component {
  constructor(){
    super();
    this.state = {
      todos: [
        {
          name: 'Organize Garage',
          id: 1528817077286, // could look different, you could use a timestamp to generate it
          completed: false
        },
        {
          name: 'Bake Cookies',
          id: 1528817084358,
          completed: false
        }
      ]
    }
  }

  handleAdd = (name) => {

    const newTodo = {
      name: name,
      id: Date.now(),
      completed: false

    };
    this.setState({
      ...this.state,
      todos: [...this.state.todos, newTodo]

    });
  }

  handleClear = () => {
    //1. setState
    //2. loop through all todos
    //3. remove all todos that have completed  === true
    //4. save filtered todos to state

    this.setState({
      ...this.state,
      todos: this.state.todos.filter(todo => {
        return (todo.completed === false);
      })
    });

  }

  render() {
    const { todos } = this.state;
    
    return (
      <div>
        <h1> To Dos</h1>
        
        <TodoList todos={todos} />

        <Form handleAdd={this.handleAdd}/>

        <button onClick={this.handleClear}>Clear</button>
      </div>
    );
  }
}
