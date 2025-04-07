import { PureComponent } from "react";
import "./List.scss";
interface ListItem {
    title: string;
}
interface ListProps {
    heading?: string;
    items: ListItem[];
}
declare class List extends PureComponent<ListProps> {
    render(): import("react/jsx-runtime").JSX.Element;
}
export default List;
