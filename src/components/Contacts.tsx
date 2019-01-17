import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { PureComponent } from "react";

interface ContactItem {
    title: string;
    icon: IconProp;
    href?: string;
}
interface ContactsProps {
    contacts: ContactItem[];
}

class Contacts extends PureComponent<ContactsProps> {
    public render() {
        return (
            <div className="contacts">
                <dl>
                    {
                        this.props.contacts.map((contact: ContactItem) => (
                            <>
                                <dt><FontAwesomeIcon icon={contact.icon}/></dt>
                                <dd>
                                    {contact.href ? <a href={contact.href}>{contact.title}</a> : contact.title}
                                </dd>
                            </>
                        ))
                    }
                </dl>
            </div>
        );
    }
}

export default Contacts;
