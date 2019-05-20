import React from "react";
import PropTypes from "prop-types";

function Phrase(props) {
  const { phrase } = props;
  return <div>{phrase.text}</div>;
}

Phrase.propTypes = {
  phrase: PropTypes.object.isRequired
};

export default Phrase;
