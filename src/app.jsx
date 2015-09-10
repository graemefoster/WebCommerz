import React from 'react';
import Router from 'react-router'

import Header from './components/header/header.jsx'
import Footer from './components/footer/footer.jsx'

export default class App extends React.Component {

  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Header />
        <Router.RouteHandler />
        <Footer />
      </div>
    );
  }
}
