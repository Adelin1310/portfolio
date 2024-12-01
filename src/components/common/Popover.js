// Popover component
import React from "react";
import PropTypes from "prop-types";
import "./Popover.css";

const Popover = ({ children, content }) => {
  return (
    <div className="popover">
      {children}
      <div className="popover-content">{content}</div>
    </div>
  );
};

Popover.propTypes = {
  children: PropTypes.node.isRequired,
  content: PropTypes.node.isRequired,
};

export default Popover;
