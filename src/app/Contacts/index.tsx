import classnames from 'classnames';
import classNames from 'classnames';
import copy from 'copy-to-clipboard';
import React, { Fragment, useEffect, useState } from 'react';

import contacts from '../../api/contacts.json';
import './styles.scss';

interface ContactItem {
  entity: string;
  title: string;
  icon: string;
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

const Contacts: React.FC<ContactsProps> = ({ name, title, isPrintable }) => {
  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isCopied) {
      timer = setTimeout(() => {
        setIsCopied(false);
      }, 1500);
    }
    return () => clearTimeout(timer);
  }, [isCopied]);

  return (
    <div className={classnames({ contacts: true, 'is-printable': isPrintable })}>
      {!isPrintable && (
        <div className="copy-contacts">
          <a
            onClick={() => {
              copy(`${name}\n${title}\n\n${copiableContants}`);
              setIsCopied(true);
            }}
            className={classNames({ 'icon-check': isCopied })}
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
              <dt className={contact.icon} />
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
};

export default Contacts;
