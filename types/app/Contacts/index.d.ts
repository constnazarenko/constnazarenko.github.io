import React from 'react';
import './styles.scss';
interface ContactsProps {
    name: string;
    title: string;
    isPrintable: boolean;
}
declare const Contacts: React.FC<ContactsProps>;
export default Contacts;
