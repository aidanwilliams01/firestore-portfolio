import React from "react";
import Skill from "./Skill";
import PropTypes from "prop-types";

function SkillList(props){

  return (
    <React.Fragment>
      <ul>
      {Object.values(props.skillList).map((skill) =>
        <Skill
          whenSkillClicked = { props.onSkillSelection }
          name={skill.name}
          description={skill.description}
          id={skill.id}
          key={skill.id}
          auth={props.auth}/>
      )}
      </ul>
    </React.Fragment>
  );
}

SkillList.propTypes = {
  skillList: PropTypes.array,
  onSkillSelection: PropTypes.func
};

export default SkillList;