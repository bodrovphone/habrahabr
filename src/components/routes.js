import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Cards from './Cards';
import Posts from './Posts';
import Home from './Home';
import NavbarInstance from './NavbarInstance';

export default class Routes extends Component {

    render() {
        return (
            <BrowserRouter>
                    <div className="test">
                        <NavbarInstance />
                        <Switch>
                            <Route path='/' exact component={Home}/>
                            <Route path='/users' exact component={() => <Cards users={this.props.users} />}/>
                            <Route path='/posts' exact component={() => <Posts data={this.props} />}/>
                        </Switch>   
                    </div>
            </BrowserRouter>
            )
    }
};

