import { useSelector } from 'react-redux';
import { selectTaskCount } from '../../redux/selectors';
import s from './Counter.module.css';

const Counter = () => {
  const { active, completed } = useSelector(selectTaskCount);

  return (
    <ul className={s.container}>
      <li className={s.active}>
        <p className={s.textActive}> Active: {active}</p>
      </li>
      <li className={s.completed}>
        <p className={s.textCompleted}> Completed: {completed}</p>
      </li>
    </ul>
  );
};

export default Counter;
