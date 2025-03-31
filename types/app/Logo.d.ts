import React, { PureComponent } from "react";
import "./Logo.scss";
interface LogoProps {
    src: string;
}
declare class Logo extends PureComponent<LogoProps> {
    render(): React.JSX.Element;
}
export default Logo;
