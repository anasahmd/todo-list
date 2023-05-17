import mainCss from '../css/main.css';

import createTodoList, { createNewTodoLink } from './components/todo';
import createTodoForm from './components/todoForm';
import { todo } from '..';

export default function createMain() {
	const main = document.createElement('main');
	main.id = 'main';
	main.appendChild(createSidebar());
	main.appendChild(createContent());
	return main;
}

function createContent() {
	const content = document.createElement('div');
	content.id = 'content';
	content.appendChild(createTodoList());
	content.appendChild(createNewTodoDOM());
	return content;
}

function createNewTodoDOM() {
	const createTodo = document.createElement('div');
	createTodo.id = 'new-todo';
	createTodo.classList.add('new-todo');

	createTodo.appendChild(createNewTodoLink());
	return createTodo;
}

function createSidebar() {
	const defaultSidebar = todo.getDefaultSidebar();
	const sidebar = document.createElement('div');
	sidebar.id = 'sidebar';
	sidebar.classList.add('sidebar', 'hidden');

	const content = document.createElement('div');
	sidebar.appendChild(content);
	content.classList.add('content');

	const defaultSelectDiv = document.createElement('div');
	content.appendChild(defaultSelectDiv);
	defaultSelectDiv.id = 'default-select';

	for (let option of defaultSidebar) {
		defaultSelectDiv.appendChild(createOption(option));
	}

	const projects = todo.getProjects();

	content.appendChild(createProjectDiv(projects));

	const overlay = document.createElement('div');
	sidebar.appendChild(overlay);
	overlay.classList.add('overlay');
	overlay.addEventListener('click', () => {
		sidebarHideHandler();
	});

	return sidebar;
}

function createOption(option) {
	const optionDiv = document.createElement('div');
	optionDiv.classList.add('sidebar-select');
	optionDiv.id = `project-${option.toLowerCase()}`;
	optionDiv.addEventListener('click', () => {
		todo.setActiveSidebar(option);
	});
	optionDiv.innerHTML = option;
	return optionDiv;
}

function createProjectDiv(projects) {
	const projectDiv = document.createElement('div');
	const h3 = document.createElement('h3');
	projectDiv.appendChild(h3);
	h3.innerHTML = 'Projects';
	projectDiv.id = 'project-div';
	for (let project of projects) {
		createProjectSelector(project);
	}
	return projectDiv;
}

export function createProjectSelector(project) {
	const projectSelector = document.createElement('div');
	projectSelector.classList.add('sidebar-select');
	projectSelector.id = `project-${project.id}`;
	document.getElementById('project-div').appendChild(projectSelector);
	projectSelector.innerHTML = project.title;
	projectSelector.addEventListener('click', (e) => {
		todo.setActiveSidebar(project);
	});
}

export function sidebarHideHandler() {
	document.getElementById('sidebar').classList.toggle('hidden');
}

//Hide show sidebar on big screen
window.onresize = () => {
	let viewportWidth = window.innerWidth;
	if (viewportWidth >= 768) {
		document.getElementById('sidebar').classList.remove('hidden');
	} else {
		document.getElementById('sidebar').classList.add('hidden');
	}
};
