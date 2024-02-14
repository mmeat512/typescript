import { CheckButton } from './button';
import styles from './todo.module.css';

export type TotoItemProps = {
  text: string;
  isDone: boolean;
};

export function TodoItem(props: TotoItemProps) {
  const { text, isDone } = props;
  return (
    <div className={styles.item}>
      <div>{text}</div>
      <CheckButton isDone={isDone} />
    </div>
  );
}
