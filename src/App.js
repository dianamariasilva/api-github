import React, { Component } from 'react';
import { Grid, 
        Row, 
        Col, 
        ListGroup, 
        ListGroupItem, 
        Nav, 
        NavItem, 
        Button, 
        ButtonGroup,
        ControlLabel,
        FormGroup,
        FormControl} from 'react-bootstrap';

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
    <Button to="/battle">
      <Link to="/battle">
        Battle
      </Link>
    </Button>
  </div>
)

function FieldGroup({ id, label, help, ...props }) {
  return (
    <FormGroup controlId={id}>
      <ControlLabel>{label}</ControlLabel>
      <FormControl {...props} />
    </FormGroup>
  );
}

const Battle = () => (
  <div>
    <Grid>
      <Row className="show-grid text-center">
        <Col sm={12} md={6}>
          <br/>
          <h3>Player 1</h3>
          <form>
            <FieldGroup
              id="formControlsText"
              type="text"
              placeholder="Github username"
            />
            <Button>Submit</Button>
          </form>
        </Col>
        <Col sm={12} md={6}>
          <br/>
          <h3>Player 2</h3>
          <form>
            <FieldGroup
              id="formControlsText"
              type="text"
              placeholder="Github username"
            />
            <Button>Submit</Button>
          </form>
        </Col>  
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
  <div className="text-center">
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