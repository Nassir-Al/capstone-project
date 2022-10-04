const TodoItem = ({id, done, title, onToggleTodo, onDeleteTodo}) => {
	return (
		<div>
			<form className="TodoItem">
				<input checked={done} onChange={() => onToggleTodo(id)} type="checkbox" />
				<ul>
					<li>{title}</li>
				</ul>
				<button type="button" onClick={() => onDeleteTodo(id)}>
					Löschen
				</button>
			</form>
		</div>
	);
};
export default TodoItem;
