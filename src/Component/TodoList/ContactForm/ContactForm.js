import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';


const ContactForm = ({ setObj }) => {

    const [objForm, setObjForm] = useState({ name: '', number: '' });
    const inputHandler = ({ target }) => {
        const { value, name } = target;
        setObjForm(prev => ({ ...prev, [name]: value }));
    };

    const addContact = (e) => {
        e.preventDefault();
        const { name, number } = objForm;
        setObj(prev => ({ ...prev, contacts: [...prev.contacts, { id: uuidv4(), name, number }] }));
        setObjForm({ name: '', number: '' });
    };

    return (
        <>
            <form onSubmit={addContact}>
                <p className="form__text">Name</p>
                <input className="input__form"
                    type="text"
                    name="name"
                    value={objForm.name}
                    onChange={inputHandler}
                />
                <p className="form__text">Number</p>
                <input className="input__form"
                    type="tel"
                    name="number"
                    value={objForm.number}
                    onChange={inputHandler}
                />
                <button type='submit'>Add contact</button>
            </form>



        </>
    );
};

export default ContactForm;