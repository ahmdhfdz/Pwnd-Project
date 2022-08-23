import React from 'react'
import "./styles.css"

interface Props {
    todo: String;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
}

const InputField = ({todo, setTodo}: Props) => {
  return <form className='input'>
    <input type='input' placeholder='Enter task' className='input__box'></input>
    <button className='input__submit' type="submit">Go</button>
  </form>
}

export default InputField;