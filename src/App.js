import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.httpGetAsync = this.httpGetAsync.bind(this);

    this.state = {
        users: '',
        infoStatus: ''
    };
  }


    // Send a 'GET' request to the specified url and run the callback function when it completes.
  httpGetAsync() {
     fetch('https://randomuser.me/api?seed=%22ph%27nglui%20mglw%27nafh%20Cthulhu%20R%27lyeh%20wgah%27nagl%20fhtagn%22&results=25&nat=US')
    .then( (response) => {
      const results = JSON.parse(response);
      this.setState({
        users: results
      });
    })
    .catch( () => {
      this.setState({
        infoStatus: 'error'
      });
    })
  }

  componentDidMount() {
    this.httpGetAsync();
  }

  render() {
    console.log(this.state);
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
