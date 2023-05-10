/* eslint-disable no-underscore-dangle */

import { v4 as uuidv4 } from 'uuid';

export default class Todo {
	constructor(title) {
		this.id = uuidv4();
		this.title = title;
	}

	set project(title) {
		this._project = title;
	}

	get project() {
		return this._project;
	}
}
