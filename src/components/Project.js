import React from "react";
import PropTypes from "prop-types";

function Project(props){
  return (
    <React.Fragment>
      {/* <div> */}
      {props.auth.currentUser && <div onClick = {() => props.whenProjectClicked(props.id)}>
        <h3>{props.title}</h3>
        <p>Link: <a href={props.link}>{props.link}</a></p>
        <hr/>
      </div>}
      {!props.auth.currentUser && <div>
        <h3>{props.title}</h3>
        <p>Link: <a href={props.link}>{props.link}</a></p>
        <hr/>
      </div>}
    </React.Fragment>
  );
}

Project.propTypes = {
  title: PropTypes.string,
  link: PropTypes.string,
  id: PropTypes.string,
};

export default Project;