import React from "react";
import "./styles.scss";
export interface Position {
    company: string;
    location?: string;
    description: string;
    end: string | null;
    start: string;
    duration: string;
    logo: string;
    total?: string;
    title: string;
    technologies: string[];
    infrastructure: string[];
    management: string[];
}
interface PositionsProps {
    heading: string;
}
declare const Positions: React.FC<PositionsProps>;
export default Positions;
