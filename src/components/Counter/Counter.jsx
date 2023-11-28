import { useSelector } from 'react-redux';
import { selectTaskCount } from '../../redux/selectors';
import s from './Counter.module.css';

const Counter = () => {
  const { active, completed } = useSelector(selectTaskCount);

  return (
    <div>
      <p className={s.text}>Active: {active}</p>
      <p className={s.text}>Completed: {completed}</p>
    </div>
  );
};

export default Counter;
