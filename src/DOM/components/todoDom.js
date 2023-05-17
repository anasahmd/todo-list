import { todo } from '../../index';
import plusSvg from '../../images/plus.svg';
import circleSvg from '../../images/circle.svg';
import checkboxSvg from '../../images/checkbox.svg';
import createTodoForm from './todoForm';

export default function createTodoList() {
	const todoList = document.createElement('div');
	todoList.id = 'todo-list';
	const todos = todo.getTodos();
	for (let todo of todos) {
		todoList.appendChild(createTodoDom(todo));
	}
	return todoList;
}

export function createTodoDom(val) {
	const todoDom = document.createElement('div');
	todoDom.classList.add('todo-container');

	const checkBox = document.createElement('div');
	const checkBoxIcon = document.createElement('img');
	if (val.done) {
		checkBoxIcon.src = checkboxSvg;
	} else {
		checkBoxIcon.src = circleSvg;
	}
	checkBox.addEventListener('click', () => {
		console.log(val);
		if (val.done) {
			todo.setTodoDone(val, false);
			checkBoxIcon.src = circleSvg;
		} else {
			todo.setTodoDone(val, true);
			checkBoxIcon.src = checkboxSvg;
		}
	});
	checkBox.appendChild(checkBoxIcon);
	checkBox.classList.add('check-box');
	todoDom.appendChild(checkBox);

	const title = document.createElement('h4');
	todoDom.appendChild(title);
	title.innerHTML = val.title;

	return todoDom;
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
