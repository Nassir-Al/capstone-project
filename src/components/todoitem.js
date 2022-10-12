
import {Buttons} from '../components/styled.components/Buttons.styled';


const TodoItem = ({id, done, title, onToggleTodo, onDeleteTodo}) => {
	return (
		<div>
			<form className="TodoItem">
				<input checked={done} onChange={() => onToggleTodo(id)} type="checkbox" />
				<ul>
					<li>{title}</li>
				</ul>
				<Buttons type="button" onClick={() => onDeleteTodo(id)}>
					Löschen
				</Buttons>
			</form>
		</div>
	);
};
export default TodoItem;
