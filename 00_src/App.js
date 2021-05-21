// import logo from './logo.svg';
// import './App.css';
import React,{ Component } from 'react';
import Hello from './components/Hello/Hello.jsx'
import Welcome from './components/Welcome/Welcome.jsx'

class App extends Component {
  render() {
    return (
    <div>
      <Hello/>
      <Welcome/>
    </div>
    )
  }
}

//暴露APP组件
export default App;
