const Todo = (props) => {
  const todos = props.todos;
  const title = props.allTodo;

  const handleDelete = (id) => {
    alert(id);
    props.deleteData(id);
  };
  return (
    <div>
      <h1>{title}</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>#</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo) => {
            return (
              <>
                <tr key={todo.id}>
                  <td>{todo.id}</td>
                  <td>{todo.title}</td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => handleDelete(todo.id)}
                    >
                      Xoa
                    </button>
                  </td>
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
export default Todo;
