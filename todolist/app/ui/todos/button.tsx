import styles from './todo.module.css';

export function CheckButton({ isDone }: { isDone: boolean }) {
  return <input defaultChecked={isDone} type="checkbox"></input>;
}

export function AddButton() {
  return (
    <div className={styles.buttonWrapper}>
      <button>Add button</button>
    </div>
  );
}
