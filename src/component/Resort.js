import React from "react";
import { useHistory } from "react-router";

const Resort = ({ resort }) => {
  const history = useHistory();
  const addToCart = (item) => {
    localStorage.setItem("cart", JSON.stringify(item));
    history.push("/checkout");
  };

  return (
    <div className="card ">
      <img src={resort.image} className="card-img-top" alt={resort.name} />
      <div className="card-body">
        <h5 className="card-title">{resort.name}</h5>
        <p className="card-text">{resort.desc.slice(0, 40)}</p>
        <p className="card-text">{resort.cost} Taka/day</p>
        <button className="btn btn-primary" onClick={() => addToCart(resort)}>
          Book Now!
        </button>
      </div>
    </div>
  );
};

export default Resort;
