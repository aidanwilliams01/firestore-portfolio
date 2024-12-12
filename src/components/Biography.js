import React from "react";
import PropTypes from "prop-types";

function Biography(props){

  return (
    <React.Fragment>
      <p>
        {Object.values(props.biography[0])[0]}
      </p>
    </React.Fragment>
  );
}

Biography.propTypes = {
  biography: PropTypes.array,
};

export default Biography;