import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { CgAddR } from 'react-icons/cg';
import { addTodo } from '../../redux/operations';
import Button from '../Button/Button';
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

      <Button className={s.button} type="submit" aria-label="Add task">
        <CgAddR size={20} fill={'rgb(174, 115, 241)'} />
      </Button>
    </form>
  );
};

export default Form;
