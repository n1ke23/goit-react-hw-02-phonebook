import React from "react";
import Item from './Item/Item';

const ContactList = ({ filter, deleteContact }) => {
    return (
        <ul>
            {filter.map(el => <Item key={el.id} {...el} deleteContact={deleteContact} />)}
        </ul>

    );
};

export default ContactList;