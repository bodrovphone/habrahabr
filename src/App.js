import React, { Component } from 'react';
import './App.css';
import Cards from './components/Cards';
import NavbarInstance from './components/NavbarInstance';

class App extends Component {
  constructor(props) {
    super(props);
    this.fetchingUsersData = this.fetchingUsersData.bind(this);
    this.conditionalRendering = this.conditionalRendering.bind(this);

    this.state = {
        users: '',
        infoStatus: '',
        renderFlag: 'users'
    };
  }

  // requesting Data with fetch API
  fetchingUsersData() {
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
    this.fetchingUsersData();
  }

  conditionalRendering(e) {
    const result = (e.target.id === 'posts') ? <Cards users={this.state.users} /> : <Posts posts={this.state.posts} />;
    return result;
  }

  render() {
    console.log(this.state.users)
    return (
      <div className="App">
          <NavbarInstance conditionalRendering={this.conditionalRendering}/>
        { this.state.users && this.state.renderFlag === 'users' ? <Cards users={this.state.users} /> : 'it is loading gif image I swear'}
      </div>
    );
  }
}

export default App;
