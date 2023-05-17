import { todo } from '../../index';
import plusSvg from '../../images/plus.svg';
import createTodoForm from './todoForm';

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

export function createNewTodoLink() {
	const newTodo = document.createElement('div');
	newTodo.classList.add('new-todo-link');
	const plusIcon = document.createElement('img');
	newTodo.appendChild(plusIcon);
	plusIcon.src = plusSvg;
	const h3 = document.createElement('h3');
	newTodo.appendChild(h3);
	h3.innerText = 'Create New Task';

	newTodo.addEventListener('click', () => {
		const newTodo = document.getElementById('new-todo');
		newTodo.innerHTML = '';
		newTodo.appendChild(createTodoForm());
	});
	return newTodo;
}
