import React, { PureComponent } from "react";
import "./List.scss";
interface ListItem {
    title: string;
}
interface ListProps {
    heading?: string;
    items: ListItem[];
}
declare class List extends PureComponent<ListProps> {
    render(): React.JSX.Element;
}
export default List;
