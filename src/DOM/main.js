import mainCss from '../css/main.css';

import createTodoList from './components/todoList';
import createTodoForm from './components/todoForm';

export default function createMain() {
	const main = document.createElement('main');
	main.id = 'main';
	main.appendChild(createTodoList());
	main.appendChild(createTodoForm());
	return main;
}
