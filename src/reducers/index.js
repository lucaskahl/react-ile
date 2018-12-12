import * as redux from 'redux';
import { rentalReducers, selectedRentalReducer } from './rental-reducer';
import thunk from 'redux-thunk';

export const init = () => {
	const reducer = redux.combineReducers({
		rentals: rentalReducers,
		rental: selectedRentalReducer
	});

	const store = redux.createStore(reducer, redux.applyMiddleware(thunk));

	return store;
};
