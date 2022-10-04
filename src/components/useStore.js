//import {v4 as uuid} from 'uuid';
import create from 'zustand';

const useStore = create(set => {
	return {
		todos: [],
		setTodos: todos => {
			set({
				todos: todos,
			});
		},
	};
});

export default useStore;
