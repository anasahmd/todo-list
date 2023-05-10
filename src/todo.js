import Todo from './classes/task';
import Project from './classes/project';

export default function todo() {
	const todoArray = [];
	const projectArray = [];
	let activeProject;

	const getTodos = () => {
		return todoArray;
	};

	const getProjects = () => {
		return projectArray;
	};

	const createNewTodo = (title) => {
		const todo = new Todo(title);
		if (activeProject) {
			addTodoToProject(todo, activeProject);
		}
		saveTodo(todo);
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
		return project;
	};

	const saveProject = (project) => {
		projectArray.push(project);
	};

	const setActiveProject = (project) => {
		activeProject = project;
	};

	return {
		createNewTodo,
		createNewProject,
		getProjects,
		getTodos,
		setActiveProject,
	};
}
