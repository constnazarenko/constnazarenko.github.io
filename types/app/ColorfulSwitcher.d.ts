import React, { PureComponent } from "react";
import "./ColorfulSwitcher.scss";
export interface SwitchTab {
    color: "red" | "yellow" | "green" | "blue";
    title: string | null;
}
interface ColorfulSwitcherProps {
    tabs: SwitchTab[];
}
declare class ColorfulSwitcher extends PureComponent<ColorfulSwitcherProps> {
    render(): React.JSX.Element;
}
export default ColorfulSwitcher;
