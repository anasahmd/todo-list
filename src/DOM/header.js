import burgerMenuSvg from '../images/burger-menu.svg';
import headerCss from '../css/header.css';
import { sidebarHideHandler } from './main';

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
