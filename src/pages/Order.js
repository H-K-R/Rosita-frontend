import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router";
import useAuth from "../hooks/useAuth";

const Order = () => {
  const [cart, setCart] = useState({});
  const { user } = useAuth();

  const { register, handleSubmit, reset } = useForm();
  const history = useHistory();

  useEffect(() => {
    const getCart = localStorage.getItem("cart");
    setCart(JSON.parse(getCart));
  }, []);

  const onSubmit = (data) => {
    if (!cart) return;

    axios
      .post("https://gentle-everglades-42923.herokuapp.com/add-booking", {
        ...data,
        cost: parseFloat(cart.cost) + 20,
        item: cart,
        userId: user.uid,
        status: "pending",
      })
      .then((res) => {
        localStorage.removeItem("cart");
        reset();
        history.push("/bookings");
      });
  };

  return (
    <div className="container py-5 my-3">
      <div className="row">
        <div className="col-md-8">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
              <label className="mb-2">Full Name</label>
              <input
                type="text"
                defaultValue={user?.displayName}
                className="form-control"
                {...register("fullName")}
                placeholder="Full Name"
              />
            </div>
            <div className="mb-3">
              <label className="mb-2">Email</label>
              <input
                type="text"
                defaultValue={user?.email}
                className="form-control"
                {...register("email")}
                placeholder="Email"
              />
            </div>
            <div className="mb-3">
              <label className="mb-2">Phone</label>
              <input
                type="number"
                className="form-control"
                {...register("phone")}
                placeholder="Phone"
              />
            </div>
            <div className="mb-3">
              <label className="mb-2">Address</label>
              <input
                type="text"
                className="form-control"
                {...register("address")}
                placeholder="Address"
              />
            </div>
            <div className="mb-3">
              <label className="mb-2">Select Date</label>
              <input
                type="date"
                className="form-control"
                {...register("date")}
                placeholder="Select Date"
              />
            </div>
            <input type="submit" className="form-control" />
          </form>
        </div>
        <div className="col-md-4">
          <div className="shadow-sm p-3 m-1">
            <h4> Order Summery</h4>
            {cart ? (
              <div>
                <p className="lead mb-0">Resort Name: {cart.name}</p>
                <p className="lead mb-0">Cost: {Number(cart.cost)} Taka/Day</p>
                <p className="lead mb-0">Vat: 20 Taka</p>
                <p className="lead mb-0">
                  Total: {parseFloat(cart.cost) + 20} Taka
                </p>
              </div>
            ) : (
              <p>Please add a Resort to Continue</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
