import React, {PropTypes} from 'react';
import Carousel from 'react-bootstrap/lib/Carousel';
import CarouselItem from 'react-bootstrap/lib/CarouselItem';

import { connect } from 'react-redux';
import { fetchFeaturedItems } from '../../actions';

class Featured extends React.Component {

    componentDidMount() {
        const { dispatch } = this.props; //this comes because we "connect'ed" our class to the store
        dispatch(fetchFeaturedItems());
    }

  render() {

    let renderItem = x => (
        <CarouselItem key={x.id}>
          <img width={900} height={500} alt='900x500' src={x.metadata.image} />
          <div className="carousel-caption">
            <h3>{x.title}</h3>
            <p>
              {x.metadata.make}
              {x.metadata.colour}
            </p>
          </div>
          </CarouselItem>);

    return (
      <div>
        <p>Featured Items!</p>
        <Carousel>
          { (this.props.items || []).map(x =>
            renderItem(x)
          )}
        </Carousel>
      </div>
    );
  }
}

Featured.propTypes = {
  items: PropTypes.array.isRequired
};


//takes what we want from the root store and assigns to props on the local component.
function mapStateToProps(state) {
    const { items } = state;
    return {
        items: items
    };
}

//the default export is the connected 'wrapper' around this class. Not the class itself.
export default connect(mapStateToProps)(Featured);

