import React, { PureComponent } from "react";
import "./styles.scss";
export interface Skill {
    title: string;
    rating: number;
    type: "frontend" | "backend" | "infra";
    description: string;
}
declare class Skills extends PureComponent {
    render(): React.JSX.Element;
}
export default Skills;
