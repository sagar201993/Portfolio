import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";

function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2011 - 2014"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Bachelors in Computer Applications
          </h3>
          <p> Bachelor Degree</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2019- till the date"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Schmalkalden University of Applied Sciences
          </h3>

          <h4 className="vertical-timeline-element-subtitle">Master Degree</h4>

          <p>Applied Computer Science</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2015 - 2017"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">HR executive</h3>
          <h4 className="vertical-timeline-element-subtitle">
            Universal Sports Industries Punjab Jalandhar India
          </h4>
          <p>Manage salary and tax records of employees.</p>
          <p>Responsible for training and development and work place safety.</p>
          <p>Responsible for compensation and benefits of employees.</p>
          <p>Create and run referral bonus programs.</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2022 - 2023"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Full stack Developer student in Epicode Bootcamp
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Berlin Germany</h4>
          <p>
            Skilled in modern web technologies and frameworks, continuously
            updating knowledge base to stay current with industry advancements.
          </p>
          <p>
            Adapt at developing backend systems and REST APIs to enable seamless
            communication between front-end and backend components.
          </p>
          <p>
            Proficient in React hook and state management, leveraging Redux for
            optimal performance and streamlined development
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2022-2023"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">Certifications</h3>
          <p> Full Stack Developer Epicode Berlin (Bootcamp)</p>
          <p>Udemy Complete java script course</p>
          <p>Udemy complete Node js Course</p>
          <p>Udemy complete React js course</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
