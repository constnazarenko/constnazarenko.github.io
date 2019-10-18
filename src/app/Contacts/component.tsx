import {IconProp, library} from "@fortawesome/fontawesome-svg-core";
import {fab} from "@fortawesome/free-brands-svg-icons";
import {far} from "@fortawesome/free-regular-svg-icons";
import {faMapMarkerAlt, faPhone} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Fragment, PureComponent } from "react";

import "./styles.scss";
library.add(fab, far, faMapMarkerAlt, faPhone);

export interface ContactItem {
    title: string;
    icon: IconProp;
    href?: string;
    nonprintable?: boolean;
}
interface ContactsProps {
    contacts: ContactItem[];
    load: () => void;
}

class Contacts extends PureComponent<ContactsProps> {
    public componentDidMount() {
        this.props.load();
    }

    public render() {
        return (
            <div className="contacts">
                <dl>
                    {// .filter((el) => !el.nonprintable)
                        this.props.contacts.map((contact: ContactItem) => (
                            <Fragment key={contact.title}>
                                <dt><FontAwesomeIcon icon={contact.icon}/></dt>
                                <dd>
                                    {contact.href ? <a href={contact.href}>{contact.title}</a> : contact.title}
                                </dd>
                            </Fragment>
                        ))
                    }
                </dl>
            </div>
        );
    }
}

export default Contacts;
