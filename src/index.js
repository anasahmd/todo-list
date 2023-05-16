import createDOM from './DOM/dom';
import createTodo from './todo';

export const todo = createTodo();

createDOM();

todo.createNewTodo('Haha');
todo.createNewProject('lol');
todo.createNewProject('Huh');
todo.createNewProject('Hoho');
todo.createNewProject('Hehe');
todo.createNewProject('Break');
todo.createNewProject('Shutpu');

console.log(todo.getProjects());
