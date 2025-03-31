import React, { PureComponent } from "react";
import "./Photo.scss";
interface PhotoProps {
    src: string;
}
declare class Photo extends PureComponent<PhotoProps> {
    render(): React.JSX.Element;
}
export default Photo;
