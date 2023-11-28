import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Stack from '@mui/material/Stack';
import Pagination from '@mui/material/Pagination';
import { usePagination } from 'custom-hooks-ts-lib';
import { deleteTodo, toggle } from '../../redux/operations';
import { selectVisibleTasks } from '../../redux/selectors';
import Form from '../Form';
import s from './TodoList.module.css';

const TodoList = () => {
  const todos = useSelector(selectVisibleTasks);
  const [page, setPage] = useState(1);
  const PER_PAGE = 5;
  const count = Math.ceil(todos.length / PER_PAGE);
  const pagination = usePagination(todos, PER_PAGE);
  const dispatch = useDispatch();

  console.log(todos);

  useEffect(() => {
    pagination.jumpToPage(page);
  }, [page, pagination]);

  const handlePageChange = (_, pageNumber) => {
    setPage(pageNumber);
  };

  const handleDelete = id => dispatch(deleteTodo(id));

  const handleToggle = (id, title, completed, userId) =>
    dispatch(toggle({ id, title, completed, userId }));

  return (
    <div className={s.todo}>
      <Form />
      <ul className={s.list}>
        {pagination.getItemsToPage().map(({ id, title, completed, userId }) => (
          <li className={s.point} key={id}>
            <input
              className={s.checkbox}
              type="checkbox"
              onChange={() => handleToggle(id, title, completed, userId)}
              checked={completed}
            />
            <p className={!completed ? s.text : `${s.text} ${s.checked}`}>
              {title}
            </p>
            <button onClick={() => handleDelete(id)}>X</button>
          </li>
        ))}
      </ul>
      <Stack spacing={2}>
        {page && (
          <Pagination
            className={s.pagination}
            count={count}
            size="large"
            page={page}
            color="primary"
            variant="outlined"
            shape="rounded"
            onChange={handlePageChange}
          />
        )}
      </Stack>
    </div>
  );
};

export default TodoList;
