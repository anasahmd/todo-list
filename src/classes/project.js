/* eslint-disable no-underscore-dangle */

import { v4 as uuidv4 } from 'uuid';

export default class Project {
	constructor(title) {
		this.id = uuidv4();
		this.title = title;
		this.task = [];
	}

	set newTask(id) {
		this.task.push(id);
	}
}
