import { IconProp, library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { faMapMarkerAlt, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Fragment } from "react";
import classnames from "classnames";

import "./styles.scss";
import contacts from "../../api/contacts.json";

library.add(fab, far, faMapMarkerAlt, faPhone);

interface ContactItem {
  title: string;
  icon: IconProp;
  alt?: string;
  href?: string;
  nonprintable?: boolean;
}
interface ContactsProps {
  isPrintable: boolean;
}

const Contacts: React.FC<ContactsProps> = ({ isPrintable }) => (
  <div className={classnames({ contacts: true, "is-printable": isPrintable })}>
    <dl>
      {(contacts as ContactItem[]).map((contact) => {
        if (isPrintable && contact.nonprintable && !contact.alt) {
          return <Fragment key={contact.title} />;
        }
        const caption =
          isPrintable && contact.alt ? contact.alt : contact.title;
        return (
          <Fragment key={contact.title}>
            <dt>
              <FontAwesomeIcon icon={contact.icon} />
            </dt>
            <dd>
              {contact.href ? <a href={contact.href} target="_blank">{caption}</a> : caption}
            </dd>
          </Fragment>
        );
      })}
    </dl>
  </div>
);

export default Contacts;
