import React, { PureComponent } from "react";

import "./Logo.scss";

interface LogoProps {
  src: string;
}
class Logo extends PureComponent<LogoProps> {
  public render() {
    return (
      <div className="logo-wrapper">
        <div
          className="logo"
          style={{ backgroundImage: `url('${this.props.src}')` }}
        />
      </div>
    );
  }
}
export default Logo;
