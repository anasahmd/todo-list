/* eslint-disable no-underscore-dangle */

import { v4 as uuidv4 } from 'uuid';

export default class Todo {
	constructor(title, description, dueDate, priority, project) {
		this.id = uuidv4();
		this.title = title;
		this.description = description;
		this.dueDate = new Date(Date.parse(dueDate));
		this.priority = priority;
		this.project = project;
		this.done = false;
	}

	set project(title) {
		this._project = title;
	}

	get project() {
		return this._project;
	}
}
