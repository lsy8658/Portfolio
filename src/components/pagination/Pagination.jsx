import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setNewArray } from "../../redux/reducers/paginationReducer";
export default function Pagination(props) {
  const dispatch = useDispatch();
  const [currentNum, setCurrentNum] = useState(1);
  const { data, viewCount } = props;
  let paginationCount = Math.ceil(data.length / viewCount); // pagin 버튼 수

  /* currentNum 이 변하면 새로운 배열로 업데이트 */
  let newDataArray = [];

  useEffect(() => {
    let start = viewCount * currentNum - viewCount;
    let end = viewCount * currentNum;
    newDataArray = data.slice(start, end);
    dispatch(setNewArray(newDataArray));
  }, [currentNum]);

  /* pagination button click */
  const paginHandle = (index) => {
    setCurrentNum(index + 1);
  };

  const prevPagin = () => {
    if (currentNum !== 1) {
      setCurrentNum(currentNum - 1);
    }
  };

  const nextPagin = () => {
    if (currentNum < paginationCount) {
      setCurrentNum(currentNum + 1);
    }
  };

  return (
    <div>
      <div>
        <button onClick={prevPagin}>prev</button>
      </div>
      {paginationCount &&
        Array(paginationCount)
          .fill()
          .map((_, index) => (
            <button
              key={index}
              onClick={() => {
                paginHandle(index);
              }}
            >
              {index + 1}
            </button>
          ))}
      <div>
        <button onClick={nextPagin}>next</button>
      </div>
    </div>
  );
}
