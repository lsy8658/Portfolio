import "./test.scss";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../../redux/reducers/counterReducer";

export default function Test() {
  const count = useSelector((state) => {
    console.log(state);
    return state.counter.count;
    // return state;
  });
  const dispatch = useDispatch();
  return (
    <div className="test_container">
      {count}
      <button onClick={() => dispatch(increment())}>add</button>
      <button onClick={() => dispatch(decrement())}>min</button>
    </div>
  );
}
