import React from "react";
import PropTypes from "prop-types";

function ProjectDetail(props){
  const { project, onClickingDelete } = props;

  return (
    <React.Fragment>
      <h3>{project.title}</h3>
      <p><em>{project.link}</em></p>
      <br />
      <button onClick={ props.onClickingEdit }>Update Project</button>
      <button onClick={()=> onClickingDelete(project.id) }>Delete Project</button>
      <hr/>
    </React.Fragment>
  );
}

ProjectDetail.propTypes = {
  project: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
};

export default ProjectDetail;