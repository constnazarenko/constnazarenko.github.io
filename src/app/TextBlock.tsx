import React, { PureComponent } from "react";

import "./NameTitle.scss";

interface NameTitleProps {
  name: string;
  title: string;
}
class NameTitle extends PureComponent<NameTitleProps> {
  public render() {
    const { name, title } = this.props;
    return (
      <div className="name-title">
        <h1>{name}</h1>
        <h2>{title}</h2>
      </div>
    );
  }
}
export default NameTitle;
