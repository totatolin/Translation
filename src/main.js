import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/index.js';
const ROOT_NODE = document.getElementById('app');

class App extends React.Component{
  render(){
    return(
      <div>
        <Header/>
        <div>
          others contents
        </div>
      </div>
    )
  }
}
ReactDOM.render(<App/>, ROOT_NODE);