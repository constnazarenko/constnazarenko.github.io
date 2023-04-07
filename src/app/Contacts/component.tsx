import {IconProp, library} from "@fortawesome/fontawesome-svg-core";
import {fab} from "@fortawesome/free-brands-svg-icons";
import {far} from "@fortawesome/free-regular-svg-icons";
import {faMapMarkerAlt, faPhone} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Fragment, PureComponent } from "react";
import classnames from "classnames";

import "./styles.scss";
library.add(fab, far, faMapMarkerAlt, faPhone);

export interface ContactItem {
    title: string;
    icon: IconProp;
    alt?: string;
    href?: string;
    nonprintable?: boolean;
}
interface ContactsProps {
    contacts: ContactItem[];
    load: () => void;
    printable: boolean;
}

class Contacts extends PureComponent<ContactsProps> {
    public componentDidMount() {
        this.props.load();
    }

    public render() {
        const { printable } = this.props;
        return (
            <div className={classnames({"contacts": true, "is-printable": printable})}>
                <dl>
                    {
                        this.props.contacts.map((contact: ContactItem) => {
                                if (printable && contact.nonprintable && !contact.alt) {
                                    return (<Fragment key={contact.title} />);
                                }
                                const caption = printable && contact.alt ? contact.alt : contact.title;
                                return (
                            <Fragment key={contact.title}>
                                <dt><FontAwesomeIcon icon={contact.icon}/></dt>
                                <dd>
                                    {contact.href ? <a href={contact.href}>{caption}</a> : caption}
                                </dd>
                            </Fragment>
                        )})
                    }
                </dl>
            </div>
        );
    }
}

export default Contacts;
