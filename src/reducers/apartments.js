
import { FAIL, START, SUCCESS } from '../actions';
import { LOAD_APARTMENTS, LOAD_AVAILABLE_OPTIONS } from '../actions/apartments';

const initialData = {
  list: [],
  availableOptions: {}
};

export default function reducer(data = initialData, action) {
  const {type, response, error} = action

  switch (type) {
    case LOAD_APARTMENTS + SUCCESS:
      return {
        ...data,
        loading: false,
        list: response
      };
    case LOAD_APARTMENTS + FAIL:
      return {
        ...data,
        error: error,
      };
    case LOAD_APARTMENTS + START:
      return {
        ...data,
        loading: true
      };
    case LOAD_AVAILABLE_OPTIONS + START:
      return {
        ...data,
        optionsLoading: true
      };
    case LOAD_AVAILABLE_OPTIONS + SUCCESS:
      return {
        ...data,
        optionsLoading: false,
        availableOptions: response
      };
    case LOAD_AVAILABLE_OPTIONS + FAIL:
      return {
        ...data,
        error: error,
      };
    default:
      return data;
  }
}