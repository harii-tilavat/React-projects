import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";
const Counter = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const toggleCounterHandler = () => {
    dispatch({ type: "toggle" });
  };
  const incrementhandler = (count) => {
    dispatch({ type: "increment", payload: { count: count || 1 } });
  };
  const decrementhandler = () => {
    dispatch({ type: "decrement" });
  };
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {state.showCounter && <div className={classes.value}>{state.counter}</div>}

      <div>
        <button onClick={() => incrementhandler(1)}>Increment</button>
        <button onClick={() => incrementhandler(5)}>Increment by 5</button>
        <button onClick={decrementhandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};
export default Counter;
// ---------------------------- Redux in class bases components -------------------------------

// class Counter extends Component {
//   toggleCounterHandler = () => {};
//   incrementhandler = () => {
//     this.props.increment();
//   };
//   decrementhandler = () => {
//     this.props.decrement();
//   };

//   render() {
//     return (
//       <main className={classes.counter}>
//         <h1>Redux Counter</h1>
//         <div className={classes.value}>{this.props.counter}</div>
//         <div>
//           <button onClick={this.incrementhandler.bind(this)}>Increment</button>
//           <button onClick={this.decrementhandler.bind(this)}>Decrement</button>
//         </div>
//         <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
//       </main>
//     );
//   }
// }

// const mapStateToProps = (state) => {
//   return {
//     counter: state.counter,
//   };
// };

// const mapDispatchToProps = (dispacth) => {
//   return {
//     increment: () => dispacth({ type: "increment" }),
//     decrement: () => dispacth({ type: "decrement" }),
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Counter);
