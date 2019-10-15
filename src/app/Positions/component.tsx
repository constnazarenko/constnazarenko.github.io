import React from "react";
import "./styles.scss";

export interface Position {
    company: string;
    description: string;
    end: string | null;
    start: string;
    title: string;
    technologies: string[];
}
interface PositionsProps {
    heading: string;
    load: () => void;
    positions: Position[];
}

class Positions extends React.Component<PositionsProps> {
    public componentDidMount() {
        this.props.load();
    }

    public render() {
        return (
            <div className="positions">
                <header>
                    <h2>{this.props.heading}</h2>
                </header>
                {
                    this.props.positions.map((position: Position) => (
                        <div className="position" key={`${position.company}-${position.title}`}>
                            <div className="period">
                                {position.start} &mdash; {position.end || "now"}
                            </div>
                            <div className="description">
                                <h3>{position.title}</h3>
                                <h4>{position.company}</h4>
                                <article>{position.description}</article>
                                <ul className="technologies">
                                    {
                                        position.technologies.map((tech, ind) => (<li key={ind}>{tech}</li>))
                                    }
                                </ul>
                            </div>
                        </div>
                    ))
                }
            </div>
        );
    }
}
export default Positions;
