import {Buttons, Todo, Check} from './styled.components/Buttons.styled';

const TodoItem = ({id, done, title, onToggleTodo, onDeleteTodo}) => {
	return (
		<div>
			<Todo>
				<input checked={done} onChange={() => onToggleTodo(id)} type="checkbox" />
				<Check>
					<p>{title}</p>
				</Check>
				<Buttons type="button" onClick={() => onDeleteTodo(id)}>
					Delete
				</Buttons>
			</Todo>
		</div>
	);
};
export default TodoItem;
