import React from "react";
import PropTypes from "prop-types";

function ReusableSkillForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <label>Name: </label>
        <input
          type='text'
          name='name' />
        <br />
        <label>Description: </label>
        <input
          type='text'
          name='description' />
        <br />
        <button type='submit'>{props.buttonText}</button>
      </form>
    </React.Fragment>
  );
}

ReusableSkillForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
}

export default ReusableSkillForm;