import React from "react";
import PropTypes from "prop-types";

function EditBiographyForm (props) {
  const { biography } = props;

  function handleEditBiographyFormSubmission(event) {
    event.preventDefault();
    props.onEditBiography({
      biography: event.target.biography.value,
      id: biography.id,
    });
  }

  return (
    <React.Fragment>
      <form onSubmit={handleEditBiographyFormSubmission}>
        <textarea type='text' name='biography'>{props.biography.biography}</textarea>
        <br />
        <button type='submit'>Update Biography</button>
      </form>
    </React.Fragment>
  );
}

EditBiographyForm.propTypes = {
  biography: PropTypes.object,
  onEditBiography: PropTypes.func
}

export default EditBiographyForm;