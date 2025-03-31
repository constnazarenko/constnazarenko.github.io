import React, { PureComponent } from "react";

import "./NameTitle.scss";

interface NameTitleProps {
  name: string | null;
  title: string | null;
}
class NameTitle extends PureComponent<NameTitleProps> {
  public render() {
    const { name, title } = this.props;
    return (
      <div className="name-title">
        {name && <h1>{name}</h1>}
        {name && <h2>{title}</h2>}
      </div>
    );
  }
}
export default NameTitle;
