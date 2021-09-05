import React from 'react';
import './ProjectSort.scss';

const ProjectSort = () => {
  const clickSort = (e: React.MouseEvent<HTMLButtonElement>) => {

    console.log(e)
    if (e.currentTarget.style.color === 'lightblue') {
      console.log(e)
      return (e.currentTarget.style.color = 'black');
    }
    e.currentTarget.style.color = 'lightblue';
  };
  return (<div className="project-sort">
    <p>Sort by : </p>
    <button className={`project-sort__name `} onClick={clickSort}>
      <p>&ensp; Name</p>
    </button>
    <button className={`project-sort__def `} onClick={clickSort}>
      <p>&ensp; Default</p>
    </button>
  </div>
  );
};

export default ProjectSort;
