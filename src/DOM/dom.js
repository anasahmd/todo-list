import globalCss from '../css/global.css';
import createHeader from './header';
import createMain from './main';

export default function createDOM() {
	document.body.appendChild(createHeader());
	document.body.appendChild(createMain());
}
