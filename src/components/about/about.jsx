import React from 'react';
import Link from 'react-router';
import Jumbotron from 'react-bootstrap/lib/Jumbotron';

export default class About extends React.Component {

  constructor() {
    super();
  }

  render() {
    return (
        <div>
      <Jumbotron>
        <h1>Welcome ss to Mobi-Commerz  - powered by Travis :)!!</h1>
      </Jumbotron>
        </div>
    );
  }
}
