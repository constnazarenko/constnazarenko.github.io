import { IconProp, library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { faMapMarkerAlt, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classnames from 'classnames';
import copy from 'copy-to-clipboard';
import React, { Fragment } from 'react';

import contacts from '../../api/contacts.json';
import './styles.scss';

library.add(fab, far, faMapMarkerAlt, faPhone);

interface ContactItem {
  entity: string;
  title: string;
  icon: IconProp;
  alt?: string;
  href?: string;
  nonprintable?: boolean;
}
interface ContactsProps {
  name: string;
  title: string;
  isPrintable: boolean;
}

const copiableContants = contacts
  .map((contact) => `${contact.entity}: ${!contact.nonprintable ? contact.title : contact.alt}`)
  .join('\n');

const Contacts: React.FC<ContactsProps> = ({ name, title, isPrintable }) => (
  <div className={classnames({ contacts: true, 'is-printable': isPrintable })}>
    {!isPrintable && (
      <div className="copy-contacts">
        <a
          onClick={() => {
            copy(`${name}\n${title}\n\n${copiableContants}`);
          }}
        >
          Copy contacts data
        </a>
      </div>
    )}

    <dl>
      {(contacts as ContactItem[]).map((contact) => {
        if (isPrintable && contact.nonprintable && !contact.alt) {
          return <Fragment key={contact.title} />;
        }
        const caption = isPrintable && contact.alt ? contact.alt : contact.title;
        return (
          <Fragment key={contact.title}>
            <dt>
              <FontAwesomeIcon icon={contact.icon} />
            </dt>
            <dd>
              {contact.href ? (
                <a href={contact.href} target="_blank" rel="noreferrer">
                  {caption}
                </a>
              ) : (
                caption
              )}
            </dd>
          </Fragment>
        );
      })}
    </dl>
  </div>
);

export default Contacts;
