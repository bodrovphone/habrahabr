import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Cards from './components/Cards';

class App extends Component {
  constructor(props) {
    super(props);
    this.fetchingData = this.fetchingData.bind(this);

    this.state = {
        users: '',
        infoStatus: ''
    };
  }

  // requesting Data with fetch API
  fetchingData() {
     fetch('https://randomuser.me/api?seed=%22ph%27nglui%20mglw%27nafh%20Cthulhu%20R%27lyeh%20wgah%27nagl%20fhtagn%22&results=25&nat=US')
    .then( (response) => {
      return response.json();
    })
    .then( (data) => {
        this.setState({
          users: data.results
        });
      }
      )
    .catch( function(e) {
      console.log("Sorry, the following error occured while fetching the data from API: ", e)
    })
  }

  componentDidMount() {
    this.fetchingData();
  }

  render() {
    console.log(this.state.users)
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        { this.state.users ? <Cards users={this.state.users} /> : 'fuck'}
      </div>
    );
  }
}

export default App;
