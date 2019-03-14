import React from "react";
import "./Positions.scss";

interface Position {
    company: string;
    description: string;
    end: string | null;
    start: string;
    title: string;
}
interface PositionsProps {
    heading: string;
    positions: Position[];
}

class Positions extends React.Component<PositionsProps> {
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
                            </div>
                        </div>
                    ))
                }
            </div>
        );
    }
}
export default Positions;
