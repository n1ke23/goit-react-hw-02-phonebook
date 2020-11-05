import React, { useState } from 'react';

const ContactForm = ({ inputHandlerFilter, filter }) => {

    return (
        <>
            <form>
                <p className="form__text">Find contact by name</p>
                <input className="input__form"
                    type="text"
                    name="filter"
                    value={filter}
                    onChange={inputHandlerFilter}
                />
            </form>

        </>
    );
};

export default ContactForm;