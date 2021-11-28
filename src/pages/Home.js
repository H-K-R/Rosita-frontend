import React from "react";
import { Link } from "react-router-dom";
import Resort from "../component/Resort";
import useResorts from "../hooks/useResorts";

const Home = () => {
  const { resorts } = useResorts();

  return (
    <div>
      <section>
        <div className="p-4 p-md-5  text-white rounded  container mt-3 hero">
          <div className="col-md-8 px-0">
            <h1 className="display-4 fst-italic">Rosita</h1>
            <p className="lead my-3">
              We always take standards for hygiene and cleanliness very
              seriously and are taking now additional steps to ensure the safety
              and well being of our guests and associates.
            </p>
            <p className="text-white fw-bold">Contact us</p>
          </div>
        </div>
      </section>

      <section className="py-3">
        <div className="container">
          <div className="row g-3">
            {resorts.slice(0, 6).map((resort) => (
              <div key={resort._id} className="col-md-4">
                <Resort resort={resort} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="h-100 p-5 text-white bg-dark rounded-3 container">
          <h2>Find the Suitable Hotels For your Stay</h2>
          <p>
            Find Affluent area known for international restaurants, embassies &
            jewelry stores near Gulshan Circle 2.
          </p>
          <button className="btn btn-outline-light" type="button">
            Contact us
          </button>
        </div>
      </section>

      <section>
        <div className="container col-xl-10 col-xxl-8 px-4 py-5">
          <div className="row align-items-center g-lg-5 py-5">
            <div className="col-md-6 text-center text-lg-start">
              <h1 className="display-4 fw-bold lh-1 mb-3">Contact us</h1>
              <p className="col-lg-10 fs-4">Don't Shy to Ask a Question</p>
            </div>
            <div className="col-md-6 ms-auto ">
              <form className="p-4 p-md-5 border rounded-3 bg-light">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="form-control mb-3"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="form-control mb-3"
                />
                <textarea placeholder="Message" className="form-control mb-3" />
                <button className="btn btn-sm btn-primary">Send</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
