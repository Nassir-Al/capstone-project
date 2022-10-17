import {Card} from './styled.components/Buttons.styled';
import TodoItem from './todoitem';
const TodoList = ({list, title, onDeleteTodo, onToggleTodo}) => {
	return (
		<Card>
			<h2>{title}</h2>

			{list.map(todo => (
				<TodoItem
					key={todo.id}
					id={todo.id}
					done={todo.done}
					title={todo.title}
					onDeleteTodo={onDeleteTodo}
					onToggleTodo={onToggleTodo}
				/>
			))}
		</Card>
	);
};
export default TodoList;
