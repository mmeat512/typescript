'use client';

export default function AddTodoForm() {
  return (
    <form>
      <div className="inputWapper">
        <label htmlFor="add-todo">Add todo</label>
        <input type="text" placeholder="add todo.." />
      </div>
      <button type="submit">Add</button>
    </form>
  );
}
