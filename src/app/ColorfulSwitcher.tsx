import React, { PureComponent } from "react";

import "./ColorfulSwitcher.scss";

export interface SwitchTab {
  color: "red" | "yellow" | "green" | "blue";
  title: string | null;
}
interface ColorfulSwitcherProps {
  tabs: SwitchTab[];
}
class ColorfulSwitcher extends PureComponent<ColorfulSwitcherProps> {
  public render() {
    return (
      <div className="colorful-switcher">
        {this.props.tabs.map((tab: SwitchTab, index) => (
          <div key={index} className={`tab tab-${tab.color}`}>
            <span>{tab.title}</span>
          </div>
        ))}
      </div>
    );
  }
}
export default ColorfulSwitcher;
