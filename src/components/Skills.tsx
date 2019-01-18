import "./Skills.scss";
import { PureComponent } from "react";

interface Skill {
    title: string;
    rating: number;
    type: "frontend" | "backend" | "infra";
}
interface SkillsProps {
    skills: Skill[];
}

class Skills extends PureComponent<SkillsProps> {
    render() {
        return (
            <div className="skills">

            </div>
        );
    }
}
