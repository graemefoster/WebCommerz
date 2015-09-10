import React from 'react';
import Jumbotron from 'react-bootstrap/lib/Jumbotron';

export default class About extends React.Component {

  constructor() {
    super();
  }

  render() {
    return (
      <Jumbotron>
        <h1>Welcome to Webshop!!</h1>
      </Jumbotron>
    );
  }
}
