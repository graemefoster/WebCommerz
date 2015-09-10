import React from 'react';
import Carousel from 'react-bootstrap/lib/Carousel';
import CarouselItem from 'react-bootstrap/lib/CarouselItem';
import FeaturedItems from '../../providers/featuredItems.jsx';

import './featured.less';

export default class Footer extends React.Component {

  constructor() {
    super();

    this.state = {items:[]};

    let featuredItems = new FeaturedItems();
    featuredItems.fetchData().success(r => {
      console.log(r);
      this.setState({items:r})
    });

  }

  render() {

    let renderItem = x => (
        <CarouselItem>
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
      <Carousel>
        {this.state.items.map(x => renderItem(x))}
      </Carousel>
    );
  }
}
