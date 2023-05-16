import { todo } from '../..';

export default function createTodoForm() {
	const todoForm = document.createElement('form');
	todoForm.addEventListener('submit', (e) => {
		e.preventDefault();
		const formData = new FormData(e.target);
		const data = Object.fromEntries(formData);
		console.log(data);
		todo.createNewTodo(
			data.title,
			data.description,
			data.dueDate,
			data.priority,
			data.project
		);
		console.log(todo.getTodos());
	});

	const titleDiv = document.createElement('div');
	todoForm.appendChild(titleDiv);
	titleDiv.appendChild(createTitleInput());

	const descriptionDiv = document.createElement('div');
	todoForm.appendChild(descriptionDiv);
	descriptionDiv.appendChild(createDescriptionInput());

	const infoDiv = document.createElement('div');
	todoForm.appendChild(infoDiv);
	infoDiv.appendChild(createDateInput());
	infoDiv.appendChild(createSelectProject());

	const priorityList = todo.getPriorityList();
	infoDiv.appendChild(createSelectPriority(priorityList));

	const actionDiv = document.createElement('div');
	todoForm.appendChild(actionDiv);
	actionDiv.appendChild(createSubmitButton());
	return todoForm;
}

function createSelectProject() {
	const selectProject = document.createElement('select');
	const projects = todo.getProjects();
	for (let project of projects) {
		const option = createOption(project.title);
		selectProject.appendChild(option);
	}
	selectProject.setAttribute('type', 'select');
	selectProject.setAttribute('name', 'project');
	return selectProject;
}

function createOption(value) {
	const option = document.createElement('option');
	option.innerText = value;
	option.value = value;
	return option;
}

function createTitleInput() {
	const titleInput = document.createElement('input');
	titleInput.setAttribute('type', 'text');
	titleInput.setAttribute('name', 'title');
	titleInput.setAttribute('placeholder', 'Title');
	return titleInput;
}

function createDescriptionInput() {
	const descriptionInput = document.createElement('input');
	descriptionInput.setAttribute('type', 'text');
	descriptionInput.setAttribute('name', 'description');
	descriptionInput.setAttribute('placeholder', 'Description');
	return descriptionInput;
}

function createDateInput() {
	const dueDateInput = document.createElement('input');
	dueDateInput.setAttribute('type', 'date');
	dueDateInput.setAttribute('name', 'due-date');
	return dueDateInput;
}

function createSelectPriority(list) {
	const selectPriority = document.createElement('select');
	for (let priority of list) {
		const option = createOption(priority);
		selectPriority.appendChild(option);
	}
	selectPriority.setAttribute('type', 'select');
	selectPriority.setAttribute('name', 'priority');
	return selectPriority;
}

function createSubmitButton() {
	const submit = document.createElement('input');
	submit.setAttribute('type', 'submit');
	return submit;
}
