import React, {PropTypes} from 'react';
import Carousel from 'react-bootstrap/lib/Carousel';
import CarouselItem from 'react-bootstrap/lib/CarouselItem';
import './featured.less';

export default class Featured extends React.Component {

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
          {this.props.items.map(x =>
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
