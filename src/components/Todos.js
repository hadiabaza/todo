const Todos = ({ todos, handleCheckboxClick }) => {
  return (
    <section>
      {todos.map((todo) => {
        return (
          <div key={todo.id}>
            <span
              onClick={() => handleCheckboxClick(todo)}
              className={todo.isDone ? "striked-out" : undefined}
            >
              {todo.value}
            </span>
          </div>
        );
      })}
    </section>
  );
};

export default Todos;
