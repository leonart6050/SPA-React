import React from 'react';
import {Route} from 'react-router';
import {HashRouter, NavLink}from 'react-router-dom'
import Home from './Home'
import Features from './Features';

class Nav extends React.Component {
    render() {    
      return (
        <HashRouter>
        <div>
            <ul className="header">
                <ol><NavLink to="/Home">Home</NavLink></ol>
                <ol><NavLink to="/Features">Contact</NavLink></ol>
            </ul>
            <div className="content">
                <Route path="/Home" component={Home}/>
                <Route path="/Features" component={Features}/>
            </div>
        </div>
      </HashRouter>
      );
    }
  }

export default Nav;