import React from 'react';
import './AllDetails.css';

const AllDetails = (props) => {
    const {image, name, born, awards, rank, country, freedomFighterAllowance} = props.parson;
    return (
      // all data showing in hear and manaj card and button handlear
  <div className="col-md-6 col-lg-4 g-4 mb-4">
    <div className="card h-100 all-card p-3 mb-5 bg-body rounded-3">
      <img src={image} className="card-img-top rounded-3" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Name: {name}</h5>
        <p className="card-text">Born: {born}</p>
        <p className="card-text">Awards: {awards}</p>
        <p className="card-text">Rank: {rank}</p>
        <p className="card-text">Country: {country}</p>
        <p className="card-text"><small>Freedom fighter allowance: ${freedomFighterAllowance}</small></p>
      </div>
      <div className="footer">
      <button onClick={() => props.handleAddToCard(props.parson)} className="btn btn-ar"><span><i className="fas fa-arrow-right"></i></span> Add To Card</button>
      </div>
    </div>
  </div>
    );
};

export default AllDetails;