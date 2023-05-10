export default class Project {
  constructor(title) {
    this.title = title;
    this.task = [];
  }

  set newTask(id) {
    this.task.push(id);
  }
}
