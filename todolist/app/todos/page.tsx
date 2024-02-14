import { Date } from '../ui/date/date';
import { AddButton } from '../ui/todos/button';
import { TodoList } from '../ui/todos/todo-list';
import styles from './todos.module.css';

export default function Todos() {
  return (
    <div className={styles.todoWrapper}>
      <Date month="Jan" year="2021" day="1" day_week="FRIDAY" />
      <TodoList />
      <AddButton />
    </div>
  );
}
