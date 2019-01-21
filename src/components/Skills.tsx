import React, { PureComponent } from "react";
import classnames from "classnames";
import "./Skills.scss";

interface Skill {
    title: string;
    rating: number;
    type: "frontend" | "backend" | "infra";
}
interface SkillsProps {
    skills: Skill[];
}

class Skills extends PureComponent<SkillsProps> {
    public render() {
        return (
            <div className="skills">
                <header>
                    <h2>Skills</h2>
                </header>
                {
                    this.props.skills.map((skill: Skill) => (
                        <div className="skill" key={skill.title}>
                            <div className="skill-title">{skill.title}</div>
                            <ul className="skill-rating">
                                {
                                    [...Array(10)].map((x, i) =>
                                        <li key={i} className={classnames({"filled": i < skill.rating})}/>
                                    )
                                }
                            </ul>
                        </div>
                    ))
                }
            </div>
        );
    }
}

export default Skills;
