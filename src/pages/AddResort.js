import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useHistory } from "react-router";

const AddResort = () => {
  const { register, handleSubmit, reset } = useForm();

  const history = useHistory();

  const onSubmit = (data) => {
    axios.post("https://gentle-everglades-42923.herokuapp.com/add-resort", data).then((result) => {
      console.log(result);
      reset();
      history.push("/");
    });
  };

  return (
    <div className="container my-4 p-4 shadow col-md-6">
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          className="form-control mb-3"
          {...register("name")}
          placeholder="Resort Name"
        />
        <input
          type="text"
          className="form-control mb-3"
          {...register("image")}
          placeholder="Paste Cover Image"
        />
        <input
          type="number"
          {...register("cost")}
          className="form-control mb-3"
          placeholder="Cost"
        />
        <textarea
          type="text"
          className="form-control mb-3"
          {...register("desc")}
          placeholder="Description"
        />
        <input type="submit" value="Submit" className="btn btn-primary" />
      </form>
    </div>
  );
};

export default AddResort;
