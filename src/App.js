import React from 'react';
import logo from './logo.svg';
import './App.css';
import TaskOne from './components/taskOne/TaskOne';
import TaskTwo from "./components/taskTwo/TaskTwo";

class App extends React.Component {
  state = {
    taskOne: 'noActive',
    taskTwo: 'noActive',
    taskThree: 'noActive'
  };

  toggleTaskOne = (event) => {
    event.currentTarget.className === 'noActive' ?
      this.setState({taskOne: 'active', taskTwo: 'noActive', taskThree: 'noActive'}) :
      this.setState({taskOne: 'noActive'})
  };

  toggleTaskTwo = (event) => {
    event.currentTarget.className === 'noActive' ?
      this.setState({taskTwo: 'active', taskOne: 'noActive', taskThree: 'noActive'}) :
      this.setState({taskTwo: 'noActive'})
  };

  toggleTaskThree = (event) => {
    event.currentTarget.className === 'noActive' ?
      this.setState({taskThree: 'active', taskOne: 'noActive', taskTwo: 'noActive'}) :
      this.setState({taskThree: 'noActive'})
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <nav>
            <input type="button"
                   className={this.state.taskOne}
                   value="task one"
                   onClick={event => this.toggleTaskOne(event)}/>
            <input type="button"
                   className={this.state.taskTwo}
                   value="task two"
                   onClick={event => this.toggleTaskTwo(event)}/>
            <input type="button"
                   className={this.state.taskThree}
                   value="task three"
                   onClick={event => this.toggleTaskThree(event)}/>
          </nav>
          {this.state.taskOne === "active" && <TaskOne/>}
          {this.state.taskTwo === "active" && <TaskTwo/>}
        </header>
      </div>
    );
  }
}

export default App;
