import React, { useEffect, useState } from 'react';
import NewProjectForm from './NewProjectForm.js';
import NewSkillForm from './NewSkillForm.js';
import ProjectList from './ProjectList.js';
import ProjectDetail from './ProjectDetail.js';
import SkillDetail from './SkillDetail.js';
import EditProjectForm from './EditProjectForm.js';
import EditSkillForm from './EditSkillForm.js';
import EditBiographyForm from './EditBiographyForm.js';
import { collection, addDoc, onSnapshot, doc, updateDoc, deleteDoc } from "firebase/firestore";
import { db, auth } from '../firebase.js';
import SkillList from './SkillList.js';
import Biography from './Biography.js';

function PortfolioControl() {
  const [formVisibleOnPage, setFormVisibleOnPage] = useState(false);
  const [skillFormVisibleOnPage, setSkillFormVisibleOnPage] = useState(false);
  const [mainProjectList, setMainProjectList] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [editing, setEditing] = useState(false);
  const [editingSkill, setSkillEditing] = useState(false);
  const [editingBiography, setBiographyEditing] = useState(false);
  const [error, setError] = useState(null);

  const [mainSkillList, setMainSkillList] = useState([]);
  const [mainBiography, setMainBiography] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unSubscribe = onSnapshot(
      collection(db, "projects"),
      (collectionSnapshot) => {
        const projects = [];
        collectionSnapshot.forEach((doc) => {
          projects.push({
            title: doc.data().title,
            link: doc.data().link,
            id: doc.id
          });
        });
        setMainProjectList(projects);
      },
      (error) => {
        setError(error.message);
      }
    );

    return () => unSubscribe();
  }, []);

  useEffect(() => {
    const unSubscribe = onSnapshot(
      collection(db, "skills"),
      (collectionSnapshot) => {
        const skills = [];
        collectionSnapshot.forEach((doc) => {
          skills.push({
            name: doc.data().name,
            description: doc.data().description,
            id: doc.id
          });
        });
        setMainSkillList(skills);
      },
      (error) => {
        setError(error.message);
      }
    );

    return () => unSubscribe();
  }, []);

  useEffect(() => {
    const unSubscribe = onSnapshot(
      collection(db, "biography"),
      (collectionSnapshot) => {
        const biography = [];
        collectionSnapshot.forEach((doc) => {
          biography.push({
            biography: doc.data().biography,
            id: doc.id
          });
        });
        setMainBiography(biography);
        setLoading(false);
      },
      (error) => {
        setError(error.message);
      }
    );

    return () => unSubscribe();
  }, []);

  const handleClick = () => {
    if (selectedProject != null) {
      setFormVisibleOnPage(false);
      setSelectedProject(null);
      setEditing(false);
    } else if (selectedSkill != null) {
      setSkillFormVisibleOnPage(false);
      setSelectedSkill(null);
      setSkillEditing(false);
    } else if (skillFormVisibleOnPage === true) {
      setSkillFormVisibleOnPage(false)
    } else if (editingBiography === true) {
      setBiographyEditing(false)
    } else {
      setFormVisibleOnPage(!formVisibleOnPage);
    }
  }

  const showSkillForm = () => {
    setSkillFormVisibleOnPage(true)
  }

  const handleAddingNewProjectToList = async (newProjectData) => {
    await addDoc(collection(db, "projects"), newProjectData);
    setFormVisibleOnPage(false);
  }

  const handleAddingNewSkillToList = async (newSkillData) => {
    await addDoc(collection(db, "skills"), newSkillData);
    setSkillFormVisibleOnPage(false);
  }

  const handleChangingSelectedProject = (id) => {
    const selection = mainProjectList.filter(project => project.id === id)[0];
    setSelectedProject(selection);
  }

  const handleChangingSelectedSkill = (id) => {
    const selection = mainSkillList.filter(skill => skill.id === id)[0];
    setSelectedSkill(selection);
  }

  const handleDeletingProject = async (id) => {
    await deleteDoc(doc(db, "projects", id));
    setSelectedProject(null);
  }

  const handleDeletingSkill = async (id) => {
    await deleteDoc(doc(db, "skills", id));
    setSelectedSkill(null);
  }

  const handleEditClick = () => {
    if (selectedProject != null) {
      setEditing(true);
    }
    else if (selectedSkill != null) {
      setSkillEditing(true);
    }
    else {
      setBiographyEditing(true);
    }
  }

  const handleEditingProjectInList = async (projectToEdit) => {
    const projectRef = doc(db, "projects", projectToEdit.id);
    await updateDoc(projectRef, projectToEdit);
    setEditing(false);
    setSelectedProject(null);
  }

  const handleEditingSkillInList = async (skillToEdit) => {
    const skillRef = doc(db, "skills", skillToEdit.id);
    await updateDoc(skillRef, skillToEdit);
    setSkillEditing(false);
    setSelectedSkill(null);
  }

  const handleEditingBiography = async (biographyToEdit) => {
    const projectRef = doc(db, "biography", biographyToEdit.id);
    await updateDoc(projectRef, biographyToEdit);
    setBiographyEditing(false);
  }

  let currentlyVisibleState = null;
  let buttonText = null;

      if(error) {
        currentlyVisibleState = <p>There was an error: {error}</p>
      } else if (loading) {
        currentlyVisibleState = <p>Loading</p>
      } else if (editing) {
        currentlyVisibleState =
          <EditProjectForm
            project = {selectedProject}
            onEditProject = {handleEditingProjectInList} />
          buttonText = "Return to Portfolio";
      } else if (editingSkill) {
        currentlyVisibleState =
          <EditSkillForm
            skill = {selectedSkill}
            onEditSkill = {handleEditingSkillInList} />
          buttonText = "Return to Portfolio";
      } else if (editingBiography) {
        currentlyVisibleState =
          <EditBiographyForm
            biography = {mainBiography[0]}
            onEditBiography = {handleEditingBiography} />
        buttonText = "Return to Portfolio";
      } else if (selectedProject != null) {
        currentlyVisibleState =
          <ProjectDetail
            project={selectedProject}
            onClickingDelete={handleDeletingProject}
            onClickingEdit = {handleEditClick}
            />
          buttonText = "Return to Portfolio";
      } else if (selectedSkill != null) {
        currentlyVisibleState =
          <SkillDetail
            skill={selectedSkill}
            onClickingDelete={handleDeletingSkill}
            onClickingEdit = {handleEditClick}
            />
          buttonText = "Return to Portfolio";
      } else if (formVisibleOnPage) {
        currentlyVisibleState = 
          <NewProjectForm 
            onNewProjectCreation={handleAddingNewProjectToList} />
        buttonText = "Return to Portfolio";
      } else if (skillFormVisibleOnPage) {
        currentlyVisibleState =
          <NewSkillForm
            onNewSkillCreation={handleAddingNewSkillToList} />
        buttonText = "Return to Portfolio";
      }  else {
        currentlyVisibleState = 
          <div>
            <h2>Bio: </h2>
            <Biography 
            biography={mainBiography}/>
            {auth.currentUser != null && <button onClick={handleEditClick}>Edit bio</button>}
            <h2>Skills: </h2>
            <SkillList 
            onSkillSelection={handleChangingSelectedSkill}
            skillList={mainSkillList}
            auth={auth} />
            {auth.currentUser != null && <button onClick={showSkillForm}>Add Skills</button>}
            <h2>Projects: </h2>
            <ProjectList 
            onProjectSelection={handleChangingSelectedProject}
            projectList={mainProjectList}
            auth={auth} />
          </div>
        buttonText = "Add Project";  
      }

      return (
        <React.Fragment>
          {currentlyVisibleState}
          {error || !auth.currentUser ? null : <button onClick={handleClick}>{buttonText}</button>}
        </React.Fragment>
      );
    }


export default PortfolioControl;