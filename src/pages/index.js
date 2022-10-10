import {useState} from 'react';
import {v4 as uuid} from 'uuid';

import Calendar from '../components/Calendar';
import Counter from '../components/Counter';
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

	// Abhacken von Todos
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

	// Suche von Todos
	return (
		<>
			<Calendar></Calendar>
			<form>
				<input
					onChange={event => setSearchQuery(event.target.value)}
					type="text"
					placeholder="search"
				/>
			</form>

			<h1>Smart Organize App</h1>

			<div>
				<input
					onKeyDown={handleAddtodo}
					type="text"
					placeholder="Hier Termine Hinzufügen"
				/>
			</div>

			{searchQuery ? (
				<TodoList
					title="Suchergebnisse"
					list={filterTodos}
					onDeleteTodo={handleDeleteTodo}
				/>
			) : (
				<>
					<TodoList
						title="Zu erledigen"
						list={activeTodos}
						onDeleteTodo={handleDeleteTodo}
						onToggleTodo={toggleTodo}
					/>
					<TodoList
						title="Erledigt"
						list={doneTodos}
						onDeleteTodo={handleDeleteTodo}
						onToggleTodo={toggleTodo}
					/>
				</>
			)}

			<div>
				<Counter />
			</div>
		</>
	);
}
