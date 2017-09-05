import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Cards from './Cards';
import Posts from './Posts';
import NavbarInstance from './NavbarInstance';

const Routes = (props) => {
    return (
        <BrowserRouter>
        <div>
        <NavbarInstance />
            <Switch>
              <Route path='/' exact component={() => <Cards users={props.users}/>}/>
              <Route path='/posts' exact component={() => <Posts posts={props.posts}/>}/>
            </Switch>
            </div>
        </BrowserRouter>
        )
};

export default Routes;
