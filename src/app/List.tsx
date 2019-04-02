import React, { PureComponent } from "react";

import "./List.scss";

interface ListItem {
    title: string;
}
interface ListProps {
    heading?: string;
    items: ListItem[];
}
class List extends PureComponent<ListProps> {
    public render() {
        const { heading, items } = this.props;
        return (
            <>
                {heading && <header><h2>{heading}</h2></header>}
                <ul className="general-list">
                    {items && items.map((item) => <li key={item.title}>{item.title}</li>)}
                </ul>
            </>
        );
    }
}
export default List;
