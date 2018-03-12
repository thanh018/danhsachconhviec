import {createStore} from 'redux';
import {status, sort} from './actions/index';

//
var initialState = {
  status: false,
  sort: {
    by: 'name',
    value: 1
  }
}

//
var myReducer = (state = initialState, action) => {
  if(action.type === 'TOGGLE_STATUS') {
    state.status = !state.status;
    return state;
  }

  if(action.type === 'SORT') {
    var {by, value} = action.sort;
    var {status} = state;
    return {
      status: status,
      sort: {
        by: by,
        value: value
      }
    };
  }
  return state;
}

//
const store = createStore(myReducer);
console.log(store.getState());

//
store.dispatch(status());
console.log(store.getState());

//
store.dispatch(sort({
  by: 'name',
  value: -1
}));
console.log(store.getState());
