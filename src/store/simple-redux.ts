import { createStore } from "redux";
import { COUNTER_ACTIONS, INITIAL_COUNTER_STATE } from "./redux-consts";

const countReducer = (state = INITIAL_COUNTER_STATE, action: { type: string, payload?: number }) => {
  switch (action.type) {
    case "customIncrement":
      return { ...state, counter: state.counter + action.payload! };

    case COUNTER_ACTIONS.INCREMENT:
      return { ...state, counter: state.counter + 1 };

    case COUNTER_ACTIONS.DECREMENT:
      return { ...state, counter: state.counter - 1 };

    case COUNTER_ACTIONS.TOGGLE_SHOW:
      return { ...state, show: !state.show };

    default:
      return state;
  }
};

const store = createStore(countReducer);

export type RootState = ReturnType<typeof store.getState>
export default store;
