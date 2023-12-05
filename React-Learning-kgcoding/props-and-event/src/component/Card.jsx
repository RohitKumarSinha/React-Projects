import React from "react";
import PropTypes from "prop-types";

function Card({ item }) {
  return (
    <div className="row">
      <div className="col-sm-6 mb-3 mb-sm-0">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{item.name}</h5>
            <p className="card-text">{item.text}</p>
            <a href="/" className="btn btn-primary">
              {item.buttonTxt}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

function CardData({ items }) {
  if (!items || items.length === 0) {
    return <div>No items to display</div>;
  }
  return (
    <div className="list-group">
      {items.map((item, index) => (
        <Card key={index} item={item} />
      ))}
    </div>
  );
}

Card.propTypes = {
  name: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  buttonTxt: PropTypes.string.isRequired,
};

Card.defaulProps = {
  name: "Default name",
  text: "Defaul text",
  buttonTxt: "Default button text",
};

export default CardData;
