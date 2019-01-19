import React, { PureComponent } from "react";
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
                <h2>Skills</h2>
                {
                    this.props.skills.map((skill: Skill) => (
                        <div>{skill.title}</div>
                    ))
                }
            </div>
        );
    }
}

export default Skills;
