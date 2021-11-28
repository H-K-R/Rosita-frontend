import axios from "axios";
import React, { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    getMyBookings(user);
  }, [user]);

  const getMyBookings = (user) => {
    axios
      .get(`https://gentle-everglades-42923.herokuapp.com/bookings/${user?.uid}`)
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

export default Bookings;
