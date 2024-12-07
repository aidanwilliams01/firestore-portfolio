import React from "react";
import PropTypes from "prop-types";

function SkillDetail(props){
  const { skill, onClickingDelete } = props;

  return (
    <React.Fragment>
      {console.log(props)}
      <h3>{skill.name}</h3>
      <p><em>{skill.description}</em></p>
      <br />
      <button onClick={ props.onClickingEdit }>Update skill</button>
      <button onClick={()=> onClickingDelete(skill.id) }>Delete Skill</button>
      <hr/>
    </React.Fragment>
  );
}

SkillDetail.propTypes = {
  skill: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
};

export default SkillDetail;