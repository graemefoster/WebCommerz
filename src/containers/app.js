import React from 'react';
import { connect } from 'react-redux';
import Header from '../components/header/header.jsx'
import Footer from '../components/footer/footer.jsx'

import { fetchFeaturedItems } from '../actions';

class App extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchFeaturedItems());
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

function mapStateToProps(state) {
  const { items } = state;
  return {
    items: items
  };
}

export default connect(mapStateToProps)(App);
