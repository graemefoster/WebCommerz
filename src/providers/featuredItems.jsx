import $ from 'jquery';

export default class FeaturedItems {

    constructor()
    {
    }

    fetchData() {
      let promise = $.get('/test-data/featured-items.json');
      return promise;
    }
}
