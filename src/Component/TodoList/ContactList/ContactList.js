import React from "react";
import Item from './Item/Item';

const ContactList = ({ obj, filter, deleteContact }) => {
    const { contacts } = obj
    console.log(filter);
    return (
        <ul>
            {contacts.map(el => <Item key={el.id} {...el} deleteContact={deleteContact} />)}
            {/* {filter.map(el => <Item key={el.id} {...el} />)} */}
        </ul>

    );
};

export default ContactList;