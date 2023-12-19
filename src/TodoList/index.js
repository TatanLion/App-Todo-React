import "./TodoList.css";

function TodoList(props) {

  //Con esta variable vamos a revisar si se uso una render prop o una render function para mandar la información
  const renderFn = props.render || props.children;

  return (
    <section className="TodoList-container">
      
      {props.error && props.onError()}
      {props.loading && props.onLoading()}
      {(!props.loading && !props.totalTodos) && props.onEmptyTodos() }
      {(!!props.totalTodos && !props.searchedTodos.length) && props.onEmptySearchResults(props.searchText)}
      {(!props.loading && !props.error) && props.searchedTodos.map(renderFn)}
      
      <ul className="TodoList">
        {props.children}
      </ul>

    </section>
  );
}

export { TodoList };
