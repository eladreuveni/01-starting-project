import { configureStore, createSlice } from "@reduxjs/toolkit";
import { INITIAL_COUNTER_STATE, INITIAL_SECOND_STATE } from "./redux-consts";

const initialState = {
  counter: 0,
  show: true,
};

const counterSlice = createSlice({
  name: "counter",
  initialState: initialState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    customIncrement(state, action) {
      state.counter += action.payload;
    },
    decrement(state) {
      state.counter--;
    },
    toggleShow(state) {
      state.show = !state.show;
    },
  },
});

export const counterActions = counterSlice.actions;





const secondSlice = createSlice({
  name: "second",
  initialState: INITIAL_SECOND_STATE,
  reducers: {
    changeName(state) {
      state.name += "a";
    },
    toggleAuth(state) {
      state.isAuthenticated = !state.isAuthenticated;
    },
  },
});


export const secondActions = secondSlice.actions;






const myStore = configureStore({
  reducer: {
    counterSlice: counterSlice.reducer,
    secondSlice: secondSlice.reducer
  }
});






// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof myStore.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof myStore.dispatch

export default myStore;
