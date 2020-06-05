import React, { Component } from 'react';
import CounterApp from './components/counter-app/CounterApp';
import 'bootstrap/dist/css/bootstrap.css'; //https://create-react-app.dev/docs/adding-bootstrap/
// import logo from './logo.svg';
// import './App.css';
 
class App extends Component {
  render() {
    return (
      <div className="container">
        <CounterApp></CounterApp>
      </div>
    );
  }
}
export default App;