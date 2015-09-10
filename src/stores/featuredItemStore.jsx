import AppDispatcher from '../dispatcher/AppDispatcher.jsx';
import FeaturedItemConstants from '../constants/featuredItemConstants.jsx';
import {EventEmitter} from 'events';

let CHANGE_EVENT = 'change';

let _data = [];

class FeaturedItemStore extends EventEmitter {

  getAll() {
      return _data;
  }

  emitChange() {
      this.emit(CHANGE_EVENT);
  }

  addChangeListener(cb) {
      this.on(CHANGE_EVENT, cb);
  }

  removeChangeListener(cb) {
      this.removeListener(CHANGE_EVENT, cb);
  }
}

let _featuredItemStore = new FeaturedItemStore();
export default _featuredItemStore

AppDispatcher.register(function(payload) {
  let action = payload.action;
  switch(action.actionType) {
    case FeaturedItemConstants.FEATUREDITEMS_REFRESH:
      _data = action.data;
      _featuredItemStore.emitChange();
    };
  }
);
