import React from 'react';
import logo from './logo.svg';
import './App.css';
import TaskOne from './components/taskOne/TaskOne';

class App extends React.Component {
  state = {
    taskOne: 'noActive',
    taskTwo: false,
    taskThree: false
  };

  toggleTaskOne = (event) => {
    event.currentTarget.className === 'noActive' ?
      this.setState({taskOne: 'active'}) :
      this.setState({taskOne: 'noActive'})
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <nav>
            <input type="button" className={this.state.taskOne} value="task one" onClick={event => this.toggleTaskOne(event)}/>
            <input type="button" value="task two"/>
            <input type="button" value="task three"/>
          </nav>
          {this.state.taskOne === "active" && <TaskOne/>}
        </header>
      </div>
    );
  }
}

export default App;
