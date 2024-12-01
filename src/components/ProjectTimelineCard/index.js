// Write your code here
import {AiFillCalendar} from 'react-icons/ai'
import './index.css'

const ProjectTimelineCard = props => {
  const {projectDetails} = props
  return (
    <div>
      <img src={projectDetails.imageUrl} alt="project" className="image" />
      <div className="row-container">
        <h1>{projectDetails.projectTitle}</h1>
        <div className="row">
          <AiFillCalendar />
          <p>{projectDetails.duration}</p>
        </div>
      </div>
      <p>{projectDetails.description}</p>
      <a href={projectDetails.projectUrl}>Visit</a>
    </div>
  )
}
export default ProjectTimelineCard
