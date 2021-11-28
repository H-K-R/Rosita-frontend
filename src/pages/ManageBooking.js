import React, { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import axios from "axios";

const ManageBooking = () => {
  const [bookings, setBookings] = useState([]);
  const { user } = useAuth();
  const [statusUpdate, setStatusUpdate] = useState("");

  useEffect(() => {
    getMyBookings(user);
    setStatusUpdate("");
  }, [user, statusUpdate]);

  const getMyBookings = (user) => {
    axios
      .get(`https://gentle-everglades-42923.herokuapp.com/bookings/`)
      .then((res) => setBookings(res.data));
  };

  const deleteBooking = (id) => {
    const con = window.confirm("Are you sure you want to delete?");
    if (!con) return null;
    axios.delete(`https://gentle-everglades-42923.herokuapp.com/booking/${id}`).then((res) => {
      if (res.data.acknowledged) {
        getMyBookings();
      }
    });
  };

  const updateHandler = (id, status) => {
    axios
      .put(`https://gentle-everglades-42923.herokuapp.com/update-status/?id=${id}&&status=${status}`)
      .then(() => setStatusUpdate("Status Updated"));
  };

  return (
    <div className="container py-5 mt-4">
      <h3>My Bookings</h3>
      <table className="table">
        <tbody>
          {bookings.map((k, i) => (
            <tr key={k._id}>
              <td>{i + 1}</td>
              <td>{k.item.name}</td>
              <td>{k.date}</td>
              <td>{k.item.cost} Taka/day</td>
              <td>{k.fullName}</td>
              <td>{k.status.toUpperCase()}</td>
              <td>
                <select
                  onChange={(e) => updateHandler(k._id, e.target.value)}
                  className="form-select"
                >
                  <option>Change Status</option>
                  <option value="pending">Pending</option>
                  <option value="waiting">Waiting</option>
                  <option value="approved">Approved</option>
                </select>
              </td>
              <td>
                <button
                  onClick={() => deleteBooking(k._id)}
                  className="btn btn-sm btn-danger"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageBooking;
