import React from "react";
import firstimage from '../Images/firstimage.jpg';
import secondimage from '../Images/second.jpeg';
import thirdimage from '../Images/third.jpeg';
import '../Styles/CardStyles.css'
function Card() {
    return (
        <div className="row row-cols-1 row-cols-md-3 g-4">
  <div className="col">
    <div className="card">
      <img src={firstimage} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Ocean</h5>
        <p className="card-text">This Card Shows the Picture of Ocean.</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src={secondimage} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Mountain</h5>
        <p className="card-text">This Card Shows the Picture of Mountain.</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src={thirdimage} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Star In the Sky</h5>
        <p className="card-text">This Card Shows the Picture of stars in the Sky.</p>
      </div>
    </div>
  </div>
</div>
    )
}

export default Card;