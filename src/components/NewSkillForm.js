import React from "react";
import PropTypes from "prop-types";
import ReusableSkillForm from "./ReusableSkillForm";

function NewSkillForm(props){

  function handleNewSkillFormSubmission(event) {
    event.preventDefault();
    props.onNewSkillCreation({
      name: event.target.name.value,
      description: event.target.description.value,
    });
  }

  return (
    <React.Fragment>
      <ReusableSkillForm
        formSubmissionHandler={handleNewSkillFormSubmission}
        buttonText="Submit" />
    </React.Fragment>
  );
}

NewSkillForm.propTypes = {
  onNewSkillCreation: PropTypes.func
}

export default NewSkillForm