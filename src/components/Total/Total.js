import React from 'react';
import './Total.css';

// add total 
const Total = (props) => {
  const {name, image} = props.detail;
    return (
      <div>
        <div className="col-md-12 col-lg-12 g-2 mt-4 total-card">
    <div className="card h-100 all-card p-2 mb-3">
    <img src={image} className="card-img-top rounded-3" alt="..."/>
      <div className="card-body">
        <h5 className="card-title ">Name: {name}</h5>
      </div>
    </div>
  </div>
      </div>
    );
};

export default Total;