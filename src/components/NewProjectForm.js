import React from "react";
import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm";

function NewProjectForm(props){

  function handleNewProjectFormSubmission(event) {
    event.preventDefault();
    props.onNewProjectCreation({
      title: event.target.title.value,
      link: event.target.link.value,
    });
  }

  return (
    <React.Fragment>
      <ReusableForm
        formSubmissionHandler={handleNewProjectFormSubmission}
        buttonText="Submit" />
    </React.Fragment>
  );
}

NewProjectForm.propTypes = {
  onNewProjectCreation: PropTypes.func
}

export default NewProjectForm