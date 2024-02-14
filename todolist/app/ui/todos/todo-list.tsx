import { TodoItem } from './item';

export function TodoList() {
  return (
    <>
      <TodoItem text="Buy new Sweatshirt" isDone={true}></TodoItem>
      <TodoItem text="2Buy new Sweatshirt" isDone={true}></TodoItem>
      <TodoItem text="3Buy new Sweatshirt" isDone={false}></TodoItem>
    </>
  );
}
