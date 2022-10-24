import {useState} from 'react';
import {v4 as uuid} from 'uuid';

import Calendar from '../components/Calendar';
import {Background} from '../components/styled.components/background.styled';
import {Headline} from '../components/styled.components/headline1.styled';
import {Input} from '../components/styled.components/Input.styled';
import TodoList from '../components/toList.js';
import useStore from '../components/useStore';
export default function Home() {
	const todos = useStore(state => state.todos);
	const setTodos = useStore(state => state.setTodos);

	const [searchQuery, setSearchQuery] = useState('');

	const handleDeleteTodo = id => {
		setTodos(todos.filter(todo => todo.id !== id));
	};

	const handleAddtodo = event => {
		if (event.key === 'Enter') {
			setTodos([...todos, {id: uuid(), title: event.target.value, done: false}]);
			event.target.value = '';
		}
	};

	const toggleTodo = id => {
		setTodos(
			todos.map(todo => {
				if (todo.id === id) {
					return {...todo, done: !todo.done};
				}
				return todo;
			})
		);
	};

	const activeTodos = todos.filter(({done}) => !done);
	const doneTodos = todos.filter(({done}) => done);
	const filterTodos = todos.filter(todo =>
		todo.title.toLowerCase().includes(searchQuery.toLowerCase())
	);

	return (
		<Background>
			<Headline>smart organizer</Headline>

			<Calendar></Calendar>
			<form>
				<Input
					onChange={event => setSearchQuery(event.target.value)}
					type="text"
					placeholder="Suche..."
				/>
			</form>

			<form>
				<Input onKeyDown={handleAddtodo} type="text" placeholder="Hinzufügen" />
			</form>

			{searchQuery ? (
				<TodoList
					title="Suchergebnisse"
					list={filterTodos}
					onDeleteTodo={handleDeleteTodo}
				/>
			) : (
				<>
					<TodoList
						title="zu erledigen"
						list={activeTodos}
						onDeleteTodo={handleDeleteTodo}
						onToggleTodo={toggleTodo}
					/>
					<TodoList
						title="erledigt"
						list={doneTodos}
						onDeleteTodo={handleDeleteTodo}
						onToggleTodo={toggleTodo}
					/>
				</>
			)}
		</Background>
	);
}
