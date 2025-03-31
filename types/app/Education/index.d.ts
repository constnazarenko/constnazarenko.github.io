import React from "react";
import "./styles.scss";
export interface EducationItem {
    company: string;
    description: string;
    end: string | null;
    start: string;
    title: string;
    logo: string;
}
declare const Education: React.FC<{
    heading: string;
}>;
export default Education;
