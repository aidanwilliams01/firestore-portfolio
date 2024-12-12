import React from "react";
import PropTypes from "prop-types";

function Skill(props){
  return (
    <React.Fragment>
      {props.auth.currentUser ? <li onClick = {() => props.whenSkillClicked(props.id)}>{props.name} - {props.description}</li> : <li>{props.name} - {props.description}</li>}
    </React.Fragment>
  );
}

Skill.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  id: PropTypes.string,
};

export default Skill;