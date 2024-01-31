import React from "react";

import { useSelector, useDispatch } from "react-redux";

import {
  ordered as icecreamOrder,
  restocked as icecreamRestocked,
} from "./icecreamSlice";

const IcecreamView = () => {
  const noOfIcecream = useSelector((state) => state.icecream.noOfIcecream);

  const dispatch = useDispatch();
  return (
    <div>
      <h2>Number of icecream : {noOfIcecream}</h2>

      <button
        onClick={() => dispatch(icecreamOrder())}
        style={{ marginRight: "20px" }}
      >
        order
      </button>
      <button onClick={() => dispatch(icecreamRestocked(3))}>restocked</button>
    </div>
  );
};

export default IcecreamView;
