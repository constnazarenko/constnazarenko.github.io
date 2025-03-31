import React, { PureComponent } from "react";
import "./NameTitle.scss";
interface NameTitleProps {
    name: string;
    title: string;
}
declare class NameTitle extends PureComponent<NameTitleProps> {
    render(): React.JSX.Element;
}
export default NameTitle;
