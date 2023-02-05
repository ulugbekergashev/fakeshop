import React, { useReducer, useEffect } from "react";
import "./CardList.css";
function reducer(state, action) {
  // console.log(state);
  if (action.type === "INCREASE") {
    return {
      ...state,
      addNumber: state.addNumber + 1,
    };
  } else if (action.type === "DECREASE") {
    if (state.addNumber == 1) {
      return state;
    }
    return {
      ...state,
      addNumber: state.addNumber - 1,
    };
  }
}
const CardList = ({ item, removeItem, setAddedItem, itemsArr }) => {
  const [state, dispatch] = useReducer(reducer, item);

  useEffect(() => {
    const newArr = itemsArr.map((itemArr) => {
      itemArr.id == item.id && (item.addNumber = state.addNumber);
      return itemArr;
    });
    setAddedItem(newArr);
  }, [state]);
  return (
    <div className="card-list-body bg-white">
      <div className="plus-items-minu">
          <button
            className="plus-btn "
            onClick={() => {
              dispatch({ type: "INCREASE" });
            }}
          >
            <i className="fa-solid fa-caret-up"></i>
          </button>
          <span className="num-of-items">{item.addNumber}pc</span>
          <button
            className="minu-btn"
            onClick={() => {
              dispatch({ type: "DECREASE" });
            }}
          >
            <i className="fa-solid fa-caret-down"></i>
          </button>
        </div>
      <img src={item.image} className="card-list-img" alt="" />
      <button
        className="delete-btn"
        onClick={() => {
          document.querySelector(".card-list-body").classList.add("animate");
          setTimeout(() => removeItem(item), 190);
        }}
      >
        <i className="fa-solid fa-trash"></i>
      </button>
      <div className="card-list-add-minu-body ">
        <h4 className="title text-truncate" >{item.title}</h4>
        <p>Price : ${item.price}</p>
        
      </div>
    </div>
  );
};

export default CardList;
