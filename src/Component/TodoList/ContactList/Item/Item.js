import React from "react";

const Item = ({ id, name, number, deleteContact }) => {
    return (
        <li>
            <p>
                {name}: {number}
            </p>
            <button
                type="button"
                onClick={(e) => {
                    deleteContact(id);
                }}
            >
                x
             </button>
        </li>

    );
};

export default Item;