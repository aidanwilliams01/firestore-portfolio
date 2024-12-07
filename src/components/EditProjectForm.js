import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";

function EditProjectForm (props) {
  const { project } = props;

  function handleEditProjectFormSubmission(event) {
    event.preventDefault();
    props.onEditProject({
      title: event.target.title.value,
      link: event.target.link.value,
      id: project.id,
    });
  }

  return (
    <React.Fragment>
      <ReusableForm
        formSubmissionHandler={handleEditProjectFormSubmission}
        buttonText="Update Project" />
    </React.Fragment>
  );
}

EditProjectForm.propTypes = {
  project: PropTypes.object,
  onEditProject: PropTypes.func
}

export default EditProjectForm;