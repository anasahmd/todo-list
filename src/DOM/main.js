import mainCss from '../css/main.css';

import createTodoList from './components/todoList';
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
	content.appendChild(createTodoForm());
	return content;
}

function createSidebar() {
	const defaultSidebar = todo.getDefaultSidebar();
	const sidebar = document.createElement('div');
	sidebar.id = 'sidebar';
	sidebar.classList.add('sidebar');

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
	const div = document.createElement('div');
	div.classList.add('sidebar-select');
	div.innerHTML = option;
	return div;
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
		todo.setActiveProject(project);
		console.log(todo.getActiveProject());
	});
}
