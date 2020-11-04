import React from 'react';

const Input = ({name, inputFuncWrite, value}) => {
  return (
    <>
      <p className="form__text">{name.charAt(0).toUpperCase() + name.slice(1)}</p>
      <input className="input__form"
          placeholder={name.charAt(0).toUpperCase() + name.slice(1)}
          type="text"
          name={name}
          value={value}
          onChange={inputFuncWrite}
        />
    </>  );
};

export default Input;