import { START, SUCCESS } from '../actions';

export const LOAD_APARTMENTS = 'LOAD_APARTMENTS';
export const LOAD_AVAILABLE_OPTIONS = 'LOAD_AVAILABLE_OPTIONS';

export const loadApartments = (param) => {
  return dispatch => {
    dispatch({ type: LOAD_APARTMENTS + START });

    // Here in the real app we will make some async ajax calls,
    // that's why we use thunk middleware.
    // For simplicity just pass the data.
    
    dispatch({
      type: LOAD_APARTMENTS + SUCCESS,
      response: []
    });
  };
};

export const loadAvailableOptions = (param) => {
  return dispatch => {
    dispatch({ type: LOAD_AVAILABLE_OPTIONS + START });
    
    dispatch({
      type: LOAD_AVAILABLE_OPTIONS + SUCCESS,
      response: {
        credit: ['mortgage', 'by_installments'],
        // Some values are commented out just to show how the filter works
        rooms_count: [0, 1, 2, /** 3, */ 4, /** 5, */, 6],
        price_per_m_min: 1111111,
        price_per_m_max: 999999999,
        totalAvailable: 1234
      }
    });
  };
};