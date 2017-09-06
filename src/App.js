import React, { Component } from 'react';
import './App.css';
import Routes from './components/routes';

class App extends Component {
  constructor(props) {
    super(props);
    this.fetchingUsersData = this.fetchingUsersData.bind(this);
    this.fetchingPostsData = this.fetchingPostsData.bind(this);
    this.state = {
        users: '',
        infoStatus: '',
        posts: ''
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

  fetchingPostsData() {
    fetch('https://jsonplaceholder.typicode.com/comments?postId=1')
    .then( (response) => {
      return response.json();
    })
    .then( (data) => {
        this.setState({
          posts: data
        });
      }
      )
    .catch( function(e) {
      console.log("Sorry, the following error occured while fetching the data from API: ", e)
    })
  }

  componentDidMount() {
    this.fetchingUsersData();
    this.fetchingPostsData();
  }

  render() {
    console.log(this.state.posts);
    return (
      <Routes users={this.state.users} posts={this.state.posts}/>
    );
  }
}

export default App;
