import $ from 'jquery'

export const REQUEST_FEATUREDITEMS = 'REQUEST_FEATUREDITEMS';
export const RECEIVE_FEATUREDITEMS = 'RECEIVE_FEATUREDITEMS';
export const FETCH_FEATUREDITEMS = 'FETCH_FEATUREDITEMS';

function requestFeaturedItems() {
    return {
        type: REQUEST_FEATUREDITEMS
    };
}

function receiveFeaturedItems(items) {
    return {
        type: RECEIVE_FEATUREDITEMS,
        items: items
    };
}

export function fetchFeaturedItems() {
    return dispatch => {
        dispatch(requestFeaturedItems());
        return $.get('/test-data/featured-items.json').success(data => {
            dispatch(receiveFeaturedItems(data));
        })
    };
}

