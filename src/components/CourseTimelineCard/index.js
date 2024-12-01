// Write your code here
import {AiFillClockCircle} from 'react-icons/ai'

import './index.css'

const CourseTimeline = props => {
  const {data} = props
  const {courseTitle, description, duration, tagsList} = data
  const setTag = res => <p className="text">{res.name}</p>

  return (
    <div>
      <div className="row-container">
        <h1>{courseTitle}</h1>
        <div className="row">
          <AiFillClockCircle />
          <p>{duration}</p>
        </div>
      </div>
      <p>{description}</p>
      <ul className="tag-list">
        {tagsList.map(item => (
          <li key={item.id} className="tags">
            {setTag(item)}
          </li>
        ))}
      </ul>
    </div>
  )
}
export default CourseTimeline
