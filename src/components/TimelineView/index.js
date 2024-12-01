// Write your code here
import {Chrono} from 'react-chrono'
import ProjectTimelineCard from '../ProjectTimelineCard'
import CouseTimeLine from '../CourseTimelineCard'
import './index.css'

const TimelineView = props => {
  const {timelineItemsList} = props
  const getData = data => {
    if (data.categoryId === 'COURSE') {
      return <CouseTimeLine key={data.id} data={data} />
    }
    return <ProjectTimelineCard projectDetails={data} key={data.id} />
  }

  return (
    <div className="time-line-con">
      <div className="chrono-container">
        <div className="HeaderContainer">
          <h1 className="Heading">
            MY JOURNEY OF <br />
            <span className="CCBPHeading"> CCBP 4.0</span>
          </h1>
        </div>
        <Chrono
          theme={{secondary: 'white'}}
          mode="VERTICAL_ALTERNATING"
          scrollable={{scrollable: true}}
          items={timelineItemsList}
        >
          {timelineItemsList.map(data => getData(data))}
        </Chrono>
      </div>
    </div>
  )
}
export default TimelineView
