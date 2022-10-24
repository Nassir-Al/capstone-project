import {Buttons} from './styled.components/Buttons.styled';
import {Todo, Check} from './styled.components/Card.styled';

const TodoItem = ({id, done, title, onToggleTodo, onDeleteTodo}) => {
	return (
		<Todo>
			<input checked={done} onChange={() => onToggleTodo(id)} type="checkbox" />
			<Check>
				<p>{title}</p>
			</Check>
			<Buttons type="button" onClick={() => onDeleteTodo(id)}>
				Delete
			</Buttons>
		</Todo>
	);
};
export default TodoItem;
