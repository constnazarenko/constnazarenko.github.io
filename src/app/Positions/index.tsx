import React from "react";
import ClassNames from "classnames";
import "./styles.scss";
import Logo from "../Logo";
import positions from "../../api/positions.json";

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

const Positions: React.FC<PositionsProps> = ({
  heading,
}) => {
  return (
    <div className="positions">
      <header>
        <h2>{heading}</h2>
      </header>
      {(positions as Position[]).map((position: Position) => (
        <div
          className="position"
          key={`${position.company}-${position.title}`}
        >
          <div
            className={ClassNames({
              period: true,
              "is-role": !position.company || !!position.total,
            })}
          >
            {position.company && <h4>{position.company}</h4>}
            {!!position.location && (
              <div className="location">
                {position.location}
              </div>
            )}
            <div className="date-total">
              {!position.total && !!position.company
                ? position.duration
                : position.total}
            </div>
            {position.logo && <Logo src={position.logo} />}
          </div>
          <div className="description">
            <h3>{position.title}</h3>
            <div className="dates">
              {position.start} &mdash; {position.end || "now"}{" "}
              <span className="duration">{position.duration}</span>
            </div>
            <article
              dangerouslySetInnerHTML={{ __html: position.description }}
            />

            {position.technologies && (
              <div className="stack-list">
                <h5>Technologies</h5>
                <ul>
                  {position.technologies.map((tech, ind) => (
                    <li key={ind}>{tech}</li>
                  ))}
                </ul>
              </div>
            )}
            {position.infrastructure && (
              <div className="stack-list">
                <h5>Infrustructure technologies</h5>
                <ul>
                  {position.infrastructure.map((infr, ind) => (
                    <li key={ind}>{infr}</li>
                  ))}
                </ul>
              </div>
            )}
            {position.management && (
              <div className="stack-list">
                <h5>Management systems:</h5>
                <ul>
                  {position.management.map((mang, ind) => (
                    <li key={ind}>{mang}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};
export default Positions;
