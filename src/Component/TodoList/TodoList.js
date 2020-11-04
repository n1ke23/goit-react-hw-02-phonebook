import React, { useState } from 'react';
import Input from './Input/Input.js';
import { v4 as uuidv4 } from 'uuid';

const state = {
  contacts: [],
  name: '',
  number: ''
}
const TodoList = () => {
  const [obj, setObj] = useState({...state})
  const inputHandler = ({target}) => {
    const { value, name } = target;
    setObj((prev) => ({
      ...prev,
      [name]: value
        }))
  }

const addContact = (e) => {
  e.preventDefault();

}

  return (
    <>
      <form onSubmit={addContact}>
          {Object.keys(obj).map((el) => (el == 'contacts') ? '' : <Input key={uuidv4()} name={el} inputFuncWrite={inputHandler}/>)}
          <button type='submit'>Add contact</button>
      </form>
    </>
  );
};

export default TodoList;