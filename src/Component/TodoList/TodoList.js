import React, { useState } from 'react';
import Input from './Input/Input.js';
import { v4 as uuidv4 } from 'uuid';

const state = {
  contacts: [],
  name: '',
  number: ''
}

const TodoList = () => {
  // const [name, setName] = useState('')
  const [obj, setObj] = useState({...state})
  const inputHandler = ({target}) => {
    const { value, name } = target;
    setObj({...obj,
      [name]: value
        })
  }

  const addContact = (e) => {
    e.preventDefault();
    const {name, number}=obj;
    setObj(prev=>({contacts: [...prev.contacts,{name, number, id:uuidv4()}], name:"", number:""}));
    console.log(obj);
  }

  return (
    <>
      <form onSubmit={addContact}>
          {/* {Object.keys(obj).map((el) => (el == 'contacts') ? '' : <Input key={uuidv4()} value={obj[el]} name={el} inputFuncWrite={inputHandler}/>)} */}
          <p className="form__text">Name / Surname</p>
            <input className="input__form"
                placeholder='Name'
                type="text"
                name="name"
                value={obj.name} 
                onChange={inputHandler}
              />
            <p className="form__text">Number</p>
            <input className="input__form"
                placeholder='Number'
                type="text"
                name="number"
                value={obj.number}
                onChange={inputHandler} 
              />
          <button type='submit'>Add contact</button>
      </form>
    </>
  );
};

export default TodoList;