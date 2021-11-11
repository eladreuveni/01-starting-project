import { useSelector, useDispatch, DefaultRootState } from "react-redux";
import { COUNTER_ACTIONS } from "../store/redux-consts";
import { counterActions } from "../store/redux-with-toolkit";
import { RootState } from "../store/simple-redux";
// import myStore, { counterActions, RootState, secondActions } from "../store/redux-with-toolkit";
import classes from "./Counter.module.css";

const Counter = () => {

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>
      </div>
      <Buttons />
      {/* <WithToolkit /> */}
    </main >
  );
};

export default Counter;

// buttons component

const Buttons = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state: any) => state.counter);

  return (
    <>
    {console.log(counter)}
      <div className={classes.counterActions}>
        <button onClick={() => {
          dispatch({ type: "customIncrement", payload: 10 })
        }}>
          Super Increment
        </button>
        <button onClick={() => {
          dispatch({ type: COUNTER_ACTIONS.INCREMENT })
        }}>
          Increment
        </button>
        <button onClick={() => {
          dispatch({ type: COUNTER_ACTIONS.DECREMENT })
        }}>
          Decrement
        </button>
      </div>
      <button onClick={() => {
        dispatch({ type: COUNTER_ACTIONS.TOGGLE_SHOW })
      }}>
        Toggle Show
      </button>
    </>
  )
}



const WithToolkit = () => {
  const counter = useSelector((state: any/* : RootState */) => state.counterSlice.counter);
  const dispatch = useDispatch()
  return (
    <>
      {counter}
      <button onClick={() => {
        dispatch(counterActions.increment())
      }}>
        Increment
      </button>
      <button onClick={() => {
        dispatch(counterActions.decrement())
      }}>
        Decrement
      </button>
    </>
  )
}