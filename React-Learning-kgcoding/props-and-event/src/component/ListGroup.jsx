import React from "react";
import PropTypes from "prop-types";

function ListGroup({ item }) {
  return (
    <div className="list-group">
      <a href="/" className="list-group-item list-group-item-action">
        <div className="d-flex w-100 justify-content-between">
          <h5 className="mb-1">{item.heading}</h5>
          <small>{item.day}</small>
        </div>
        <p className="mb-1">{item.content}.</p>
        <small>{item.smalltext}</small>
      </a>
    </div>
  );
}

function ListData({ items }) {
  if (!items || items.length === 0) {
    return <div>No items to display</div>;
  }
  return (
    <div className="list-group">
      {items.map((item, index) => (
        <ListGroup key={index} item={item} />
      ))}
    </div>
  );
}

ListGroup.propTypes = {
  heading: PropTypes.string.isRequired,
  day: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  smalltext: PropTypes.string,
};

ListGroup.defaulProps = {
  heading: "Default Heading",
  day: "Defaul Day",
  content: "Default content",
  smalltext: "Default text",
};

export default ListData;
