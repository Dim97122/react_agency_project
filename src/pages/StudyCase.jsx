import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import projects from '../data/projects'
import { FormattedMessage } from 'react-intl';

const StudyCase = () => {
  let {projectSlug} =useParams();
  const [currentProject, setCurrentProject] = useState(0);
  useEffect(() => {
        setCurrentProject(projects.find((project) => project.slug === projectSlug));
  });


  return (
    <>
    <div className="container">
      <div>
        <Link to={`/works`}>
          Retour
        </Link>
      </div>

      <h1><FormattedMessage id={`${currentProject.client}.title`} /></h1>
      <p><FormattedMessage id={`${currentProject.client}.description`} /></p>
    </div>
    </>
  );
}
export default StudyCase;
