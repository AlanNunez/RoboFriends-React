import { CHANGE_SEARCH_FIELD } from "./constants.js";
import { REQUEST_ROBOTS_PENDING } from "./constants.js";
import { REQUEST_ROBOTS_SUCCESS } from "./constants.js";
import { REQUEST_ROBOTS_FAILED } from "./constants.js";

const initialState = {
  searchField: "",
};

export const searchRobots = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_SEARCH_FIELD:
      return Object.assign({}, state, { searchField: action.payload });
    default:
      return state;
  }
};

const initialRobotState = {
  isPending: false,
  robots: [],
  error: ""
};

export const requestRobots = (state = initialRobotState, action = {}) => {
  switch (action.type) {
    case REQUEST_ROBOTS_PENDING:
      return Object.assign({}, state, { isPending: true });
    case REQUEST_ROBOTS_SUCCESS:
      return Object.assign({}, state, { robots: action.payload, isPending: false });
    case REQUEST_ROBOTS_FAILED:
      return Object.assign({}, state, { error: action.payload, isPending: false  });
    default:
      return state;
  }
};
