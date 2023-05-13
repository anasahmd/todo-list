import burgerMenuSvg from '../images/burger-menu.svg';
import headerCss from '../css/header.css';

export default function createHeader() {
	const header = document.createElement('header');
	header.appendChild(createNavbar());
	header.appendChild(createSidebar());
	return header;
}

function createNavbar() {
	const nav = document.createElement('nav');

	const hamburger = document.createElement('div');
	nav.appendChild(hamburger);
	hamburger.id = 'hamburger';

	hamburger.addEventListener('click', () => {
		document.getElementById('sidebar').classList.toggle('hidden');
	});

	const hamburgerIcon = document.createElement('img');
	hamburger.appendChild(hamburgerIcon);
	hamburgerIcon.src = burgerMenuSvg;

	const title = document.createElement('div');
	nav.appendChild(title);
	title.innerText = 'ToDo App';

	return nav;
}

function createSidebar() {
	const sidebar = document.createElement('div');
	sidebar.id = 'sidebar';
	sidebar.classList.add('sidebar', 'hidden');

	const content = document.createElement('div');
	sidebar.appendChild(content);
	content.classList.add('content');

	const all = document.createElement('div');
	content.appendChild(all);
	all.innerHTML = 'All Todos';

	const overlay = document.createElement('div');
	sidebar.appendChild(overlay);
	overlay.classList.add('overlay');

	return sidebar;
}
