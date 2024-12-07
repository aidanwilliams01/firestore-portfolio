import React from "react";
import ReusableSkillForm from "./ReusableSkillForm";
import PropTypes from "prop-types";

function EditSkillForm (props) {
  const { skill } = props;

  function handleEditSkillFormSubmission(event) {
    event.preventDefault();
    props.onEditSkill({
      name: event.target.name.value,
      description: event.target.description.value,
      id: skill.id,
    });
  }

  return (
    <React.Fragment>
      {/* {console.log(props)} */}
      <ReusableSkillForm
      formSubmissionHandler={handleEditSkillFormSubmission}
      buttonText="Update Skill" />
    </React.Fragment>
  );
}

EditSkillForm.propTypes = {
  skill: PropTypes.object,
  onEditSkill: PropTypes.func
}

export default EditSkillForm;