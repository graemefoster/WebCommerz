import React from 'react';
import Header from '../components/header/header.jsx'
import Footer from '../components/footer/footer.jsx'

export default class App extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div>
            <Header />
            {this.props.children}
            <Footer />
        </div>
    );
  }
}

