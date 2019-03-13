import classnames from "classnames";
import React, { PureComponent } from "react";
import "./Skills.scss";

interface Skill {
    title: string;
    rating: number;
    type: "frontend" | "backend" | "infra";
    description: string;
}
interface SkillsProps {
    skills: Skill[];
    loadSkills: () => void;
}

class Skills extends PureComponent<SkillsProps> {
    public componentDidMount() {
        this.props.loadSkills();
    }

    public render() {
        return (
            <div className="skills">
                <header>
                    <h2>Skills</h2>
                </header>
                {
                    this.props.skills && this.props.skills.map((skill: Skill) => (
                        <div className="skill" key={skill.title}>
                            <div className="skill-title">{skill.title}</div>
                            <ul className="skill-rating">
                                {
                                    [...Array(10)].map((x, i) =>
                                        <li key={i} className={classnames({filled: i < skill.rating})}/>
                                    )
                                }
                            </ul>
                            <div
                                className="skill-description"
                                dangerouslySetInnerHTML={{ __html: skill.description }}
                            />
                        </div>
                    ))
                }
            </div>
        );
    }
}

export default Skills;
export { Skill };
