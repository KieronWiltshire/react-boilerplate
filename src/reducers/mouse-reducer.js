import { ActionType } from "redux-promise-middleware";

/**
 * The initial state structure this specific reducer.
 */
const preloadedState = {
  x: 0,
  y: 0
};

/**
 * Reducer.
 */
export default function(state = (preloadedState), action) {
  switch (action.type) {
    case 'UPDATE_MOUSE_POSITION':
      return {
        ...state,
        x: action.x,
        y: action.y
      };
    default:
      return { ...state };
  }
}
  
  