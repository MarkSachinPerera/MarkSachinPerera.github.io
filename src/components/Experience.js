import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';


function Experience(){

    return(
<VerticalTimeline>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="In Progress"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
  >
    <h3 className="vertical-timeline-element-title carousel-text">Computer Engineering Student</h3>
    <h4 className="vertical-timeline-element-subtitle carousel-text">Toronto, ON</h4>
    <p className="carousel-text">
      Computer Engineering degree at the University of Toronto. 
    </p>
  </VerticalTimelineElement>


  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="2019 - 2020"
    iconStyle={{ background: 'rgb(255, 0, 0)', color: '#fff' }}
  >
    <h3 className="vertical-timeline-element-title carousel-text">Environment and Climate Change Canada</h3>
    <h4 className="vertical-timeline-element-subtitle carousel-text">Toronto, ON</h4>
    <p className="carousel-text">
    Internship as software developer at ECCC. 
    </p>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
  />
</VerticalTimeline>


    );
}


export default Experience;