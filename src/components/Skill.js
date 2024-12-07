import React from "react";
import PropTypes from "prop-types";

function Skill(props){
  return (
    <React.Fragment>
      {console.log(props.auth.currentUser)}
      {props.auth.currentUser ? <li onClick = {() => props.whenSkillClicked(props.id)}>{props.name} - {props.description}</li> : <li>{props.name} - {props.description}</li>}
      {/* {props.auth === null && <li>{props.name} - {props.description}</li>} */}
      {/* <div onClick = {() => props.whenSkillClicked(props.id)}>
        <h3>{props.name}</h3>
        <p>Description: {props.description}</p>
        <hr/>
      </div> */}
    </React.Fragment>
  );
}

Skill.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  id: PropTypes.string,
};

export default Skill;