import React, { Component } from 'react';
import { Grid, Row, Col, ListGroup, ListGroupItem, Nav, NavItem, Button, ButtonGroup } from 'react-bootstrap';

// import logo from './logo.svg';
import './App.css';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

const Home = () => (
  <div className="text-center">
    <h2>Github Battle: Battle your friends... and stuff.</h2>
  </div>
)

const Battle = () => (
  <div>
    <Grid>
      <Row className="show-grid text-center">
        <Col sm={12} md={6}><br/>Player 1</Col>
        <Col sm={12} md={6}><br/>Player 2</Col>  
      </Row>
    </Grid>
  </div>
)

const Popular = ({ match }) => (
  <div>
    <h3>{match.params.PopularId}</h3>
  </div>
)

const Popular1 = ({ match }) => (
  <div>
    <h2>Popular</h2>
    <ButtonGroup>
      <Button>
        <Link to={`${match.url}/all`}>
          All
        </Link>
      </Button>
      <Button>
        <Link to={`${match.url}/javascript`}>
          Javascript
        </Link>
      </Button>
      <Button>
        <Link to={`${match.url}/ruby`}>
          Ruby 
        </Link>
      </Button>
      <Button>
        <Link to={`${match.url}/java`}>
          Java 
        </Link>
      </Button>
      <Button>
        <Link to={`${match.url}/css`}>
          CSS 
        </Link>
      </Button>
      <Button>
        <Link to={`${match.url}/python`}>
          Python
        </Link>
      </Button>
    </ButtonGroup>

    <Route path={`${match.url}/:PopularId`} component={Popular}/>
    <Route exact path={match.url} render={() => (
      <h3>Please select a Popular.</h3>
    )}/>
  </div>
)

const App = () => (
  <Router>
    <div>
      <Nav bsStyle="pills" activeKey={1}>
        <NavItem><Link to="/">Home</Link></NavItem>
        <NavItem><Link to="/battle">Battle</Link></NavItem>
        <NavItem><Link to="/popular1">Popular</Link></NavItem>
      </Nav>

      <hr/>

      <Route exact path="/" component={Home}/>
      <Route path="/battle" component={Battle}/>
      <Route path="/popular1" component={Popular1}/>
    </div>
  </Router>
)
export default App