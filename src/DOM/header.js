import burgerMenuSvg from '../images/burger-menu.svg';
import headerCss from '../css/header.css';

export default function createHeader() {
	const header = document.createElement('header');
	header.appendChild(createNavbar());
	return header;
}

function createNavbar() {
	const nav = document.createElement('nav');

	const hamburger = document.createElement('div');
	nav.appendChild(hamburger);
	hamburger.id = 'hamburger';

	hamburger.addEventListener('click', () => {
		sidebarHideHandler();
	});

	const hamburgerIcon = document.createElement('img');
	hamburger.appendChild(hamburgerIcon);
	hamburgerIcon.src = burgerMenuSvg;

	const title = document.createElement('div');
	nav.appendChild(title);
	title.innerText = 'ToDo App';

	return nav;
}

export function createProjectSelector(project) {
	const projectSelector = document.createElement('div');
	projectSelector.classList.add('sidebar-select');
	document.getElementById('project-div').appendChild(projectSelector);
	projectSelector.innerHTML = project.title;
}

function sidebarHideHandler() {
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
