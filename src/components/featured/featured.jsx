import React from 'react';
import Carousel from 'react-bootstrap/lib/Carousel';
import CarouselItem from 'react-bootstrap/lib/CarouselItem';
import FeaturedItemStore from '../../stores/featuredItemStore.jsx';

import './featured.less';

export default class Featured extends React.Component {

  constructor() {
    super();
    this._onChange = this._onChange.bind(this);
    this.state = {items:[]};
  }

  _onChange() {
    this.setState({items: FeaturedItemStore.getAll()});
  }

  componentDidMount() {
    FeaturedItemStore.addChangeListener(this._onChange);
  }

  componentWillUnmount() {
    FeaturedItemStore.removeChangeListener(this._onChange);
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
      <Carousel>
        {this.state.items.map(x => renderItem(x))}
      </Carousel>
    );
  }
}
