import AppDispatcher from '../dispatcher/AppDispatcher.jsx';
import FeaturedItemConstants from '../constants/featuredItemConstants.jsx';
import $ from 'jquery'

console.log(FeaturedItemConstants);

export default {
    fetch: () => {

      $.get('/test-data/featured-items.json').success(data => {
            AppDispatcher.handleAction({
                actionType: FeaturedItemConstants.FEATUREDITEMS_REFRESH,
                data: data
            });
        })
    }
}
