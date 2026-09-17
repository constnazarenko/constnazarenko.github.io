import { PureComponent } from "react";
import "./ColorfulSwitcher.scss";
export interface SwitchTab {
    color: "red" | "yellow" | "green" | "blue";
    title: string | null;
}
interface ColorfulSwitcherProps {
    tabs: SwitchTab[];
}
declare class ColorfulSwitcher extends PureComponent<ColorfulSwitcherProps> {
    render(): import("react/jsx-runtime").JSX.Element;
}
export default ColorfulSwitcher;
