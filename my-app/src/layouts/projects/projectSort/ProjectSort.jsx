import './ProjectSort.scss';

const ProjectSort = () => {
  const clickSort = (e) => {
    if (e.target.style.color === 'lightblue') {
      return (e.target.style.color = 'black');
    }
    e.target.style.color = 'lightblue';
  };
  return (<div className="project-sort">
    <p>Sort by : </p>
    <div className={`project-sort__name `} onClick={clickSort}>
      <p>&ensp; Name</p>
    </div>
    <div className={`project-sort__def `} onClick={clickSort}>
      <p>&ensp; Default</p>
    </div>
  </div>
  );
};

export default ProjectSort;
