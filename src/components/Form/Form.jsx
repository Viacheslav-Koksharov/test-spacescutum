import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../redux/operations';
import s from './Form.module.css';

const Form = () => {
  const [title, setTitle] = useState('');
  const dispatch = useDispatch();

  const handleChangeForm = e => {
    setTitle(e.target.value);
  };

  const handleSubmitForm = e => {
    e.preventDefault();
    const todo = {
      userId: 1,
      title: title,
      completed: false,
    };
    dispatch(addTodo(todo));
    setTitle('');
  };

  return (
    <form className={s.form} onSubmit={handleSubmitForm}>
      <input
        className={s.input}
        type="text"
        name="title"
        value={title}
        autoComplete="off"
        placeholder="Add New Task"
        onChange={handleChangeForm}
      />
      <button className={s.button} type="submit" aria-label="Add task"></button>
    </form>
  );
};

export default Form;
