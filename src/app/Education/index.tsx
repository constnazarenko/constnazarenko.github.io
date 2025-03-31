import React from "react";
import "./styles.scss";
import Logo from "../Logo";
import educations from "../../api/education.json";

export interface EducationItem {
  company: string;
  description: string;
  end: string | null;
  start: string;
  title: string;
  logo: string;
}

const Education: React.FC<{
  heading: string;
}> = ({ heading }) => {
  return (
    <div className="educations">
      <header>
        <h2>{heading}</h2>
      </header>
      {(educations as EducationItem[]).map((education) => (
        <div
          className="education"
          key={`${education.company}-${education.title}`}
        >
          <div className="period">
            {education.start} &mdash; {education.end || "now"}
            <Logo src={education.logo} />
          </div>
          <div className="description">
            <h3>{education.title}</h3>
            <h4>{education.company}</h4>
            <article>{education.description}</article>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Education;
