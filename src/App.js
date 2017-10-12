import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)

const Battle = () => (
  <div>
    <h2>Battle</h2>
  </div>
)

const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
)

const Popular1 = ({ match }) => (
  <div>
    <h2>Popular</h2>
    <ul>
      <li>
        <Link to={`${match.url}/all`}>
          All
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/javascript`}>
          Javascript
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/ruby`}>
          Ruby 
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/java`}>
          Java 
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/css`}>
          CSS 
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/python`}>
          Python
        </Link>
      </li>
    </ul>

    <Route path={`${match.url}/:topicId`} component={Topic}/>
    <Route exact path={match.url} render={() => (
      <h3>Please select a topic.</h3>
    )}/>
  </div>
)

const BasicExample = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/battle">Battle</Link></li>
        <li><Link to="/popular1">Popular</Link></li>
      </ul>

      <hr/>

      <Route exact path="/" component={Home}/>
      <Route path="/battle" component={Battle}/>
      <Route path="/popular1" component={Popular1}/>
    </div>
  </Router>
)
export default BasicExample