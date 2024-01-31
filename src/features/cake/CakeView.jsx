import React from "react";

import { useSelector, useDispatch } from "react-redux";

import { ordered as CakeOrder, restocked as CakeRestocked } from "./cakeSlice";

const CakeView = () => {
  const noOfCakes = useSelector((state) => state.cake.noOfCakes);

  const dispatch = useDispatch();
  return (
    <div>
      <h2>Number of cakes : {noOfCakes}</h2>

      <button
        onClick={() => dispatch(CakeOrder())}
        style={{ marginRight: "20px" }}
      >
        order
      </button>
      <button onClick={() => dispatch(CakeRestocked(5))}>restocked</button>
    </div>
  );
};

export default CakeView;
