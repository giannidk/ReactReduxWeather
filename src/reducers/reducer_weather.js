import { FETCH_WEATHER } from '../actions/index';

export default function (state = [], action) {
    switch (action.type) {
        case FETCH_WEATHER:
            //return state.concat([action.payload.data]);
            return [action.payload.data, ...state]; // ES6 version of the above, 
            //creates a new array and inserts new row at the top 
    }
    return state;
}
