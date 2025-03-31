import classnames from "classnames";
import React, { PureComponent } from "react";
import "./styles.scss";
import skills from "../../api/skills.json";

export interface Skill {
  title: string;
  rating: number;
  type: "frontend" | "backend" | "infra";
  description: string;
}

class Skills extends PureComponent {
  public render() {
    return (
      <div className="skills">
        <header>
          <h2>Skills</h2>
        </header>
        {(skills as Skill[]).map((skill: Skill) => (
            <div className="skill" key={skill.title}>
              <div className="skill-title">{skill.title}</div>
              <ul className="skill-rating">
                {[...Array(10)].map((x, i) => (
                  <li
                    key={i}
                    className={classnames({ filled: i < skill.rating })}
                  />
                ))}
              </ul>
              <div
                className="skill-description"
                dangerouslySetInnerHTML={{ __html: skill.description }}
              />
            </div>
          ))}
      </div>
    );
  }
}

export default Skills;
