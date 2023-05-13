import { todo } from '../../index';

export default function createTodoList() {
	const todoList = document.createElement('div');
	todoList.id = 'todo-list';
	const todos = todo.getTodos();
	for (let todo of todos) {
		todoList.appendChild(createTodo(todo));
	}
	return todoList;
}

export function createTodo(val) {
	const todo = document.createElement('div');
	todo.classList.add('todo-container');

	const checkBox = document.createElement('div');
	checkBox.classList.add('check-box');
	todo.appendChild(checkBox);

	const title = document.createElement('div');
	todo.appendChild(title);
	title.innerHTML = val.title;

	return todo;
}
