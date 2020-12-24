import React from "react";
import { Link } from "react-router-dom";
import "../res/css/part.css";

const Home = () => {
  return (
    <div className="home-main container .container-s .container-lg .container-md .container-sm .container-xsm">
      <div className="row">
        <div className="col">
          <h1> this is home </h1>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <Link to="/login">
            <button className="btn btn-dark">LOGIN</button>
          </Link>
        </div>
        <div className="col">
          <Link to="/register">
            <button className="btn btn-dark">REGISTER</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
