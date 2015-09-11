import AppDispatcher from '../dispatcher/AppDispatcher.jsx';
import FeaturedItemConstants from '../constants/featuredItemConstants.jsx';
import $ from 'jquery'

export default {
    fetch: () => {

      $.get('/test-data/featured-items.js').success(data => {
            AppDispatcher.handleAction({
                actionType: FeaturedItemConstants.FEATUREDITEMS_REFRESH,
                data: data
            });
        })
    }
}
