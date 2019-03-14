import React, { PureComponent } from "react";

import "./Photo.scss";

interface PhotoProps {
    src: string;
}
class Photo extends PureComponent<PhotoProps> {
    public render() {
        return (
            <div className="photo-wrapper">
                <div className="photo" style={{ backgroundImage: `url('${this.props.src}')` }} />
            </div>
        );
    }
}
export default Photo;
