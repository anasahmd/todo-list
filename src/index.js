import createDOM from './DOM/dom';
import createTodo from './todo';

export const todo = createTodo();

createDOM();

todo.createNewTodo('Haha');
todo.createNewProject('Lol');
todo.createNewProject('more lol');
