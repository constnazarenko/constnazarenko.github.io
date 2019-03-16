import React from "react";
import "./styles.scss";

export interface EducationItem {
    company: string;
    description: string;
    end: string | null;
    start: string;
    title: string;
}
interface EducationProps {
    heading: string;
    load: () => void;
    educations: EducationItem[];
}

class educations extends React.Component<EducationProps> {
    public componentDidMount() {
        this.props.load();
    }

    public render() {
        return (
            <div className="educations">
                <header>
                    <h2>{this.props.heading}</h2>
                </header>
                {
                    this.props.educations.map((education: EducationItem) => (
                        <div className="education" key={`${education.company}-${education.title}`}>
                            <div className="period">
                                {education.start} &mdash; {education.end || "now"}
                            </div>
                            <div className="description">
                                <h3>{education.title}</h3>
                                <h4>{education.company}</h4>
                                <article>{education.description}</article>
                            </div>
                        </div>
                    ))
                }
            </div>
        );
    }
}
export default educations;
