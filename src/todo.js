import Todo from './classes/todo';
import Project from './classes/project';
import { createTodo as createTodoDom } from './DOM/components/todo';
import { createProjectSelector } from './DOM/main';

export default function createTodo() {
	const todoArray = [];
	const projectArray = [];

	const defaultSidebar = ['All', 'Today', 'Upcoming', 'Important', 'Completed'];

	const priority = ['Low', 'Medium', 'High'];

	let activeProject;

	const getDefaultSidebar = () => {
		return defaultSidebar;
	};

	const getTodos = () => {
		return todoArray;
	};

	const getProjects = () => {
		return projectArray;
	};

	const getPriorityList = () => {
		return priority;
	};

	const createNewTodo = (title, description, dueDate, priority, project) => {
		const todo = new Todo(title, description, dueDate, priority, project);
		if (activeProject) {
			addTodoToProject(todo, activeProject);
		}
		saveTodo(todo);
		document.querySelector('#todo-list').prepend(createTodoDom(todo));
		return todo;
	};

	const addTodoToProject = (todo, project) => {
		project.newTodo = todo.id;
		todo.project = project.title;
	};

	const saveTodo = (todo) => {
		todoArray.push(todo);
	};

	const createNewProject = (title) => {
		const project = new Project(title);
		saveProject(project);
		createProjectSelector(project);
		return project;
	};

	const saveProject = (project) => {
		projectArray.push(project);
	};

	const getActiveSidebar = () => {
		return activeProject;
	};

	const setActiveSidebar = (project) => {
		activeProject = project;
		const div = document.getElementById(
			`project-${project.id ? project.id : project.toLowerCase()}`
		);
		addSelected(div);
	};

	const addSelected = (div) => {
		const sidebarSelect = document.querySelectorAll('.sidebar-select');
		for (let option of sidebarSelect) {
			option.classList.remove('active');
		}
		div.classList.add('active');
	};

	return {
		createNewTodo,
		createNewProject,
		getProjects,
		getTodos,
		getActiveSidebar,
		setActiveSidebar,
		getPriorityList,
		getDefaultSidebar,
	};
}
