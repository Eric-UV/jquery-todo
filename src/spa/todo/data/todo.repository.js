import todo from '../models/todo.model';

export default {
    getAll: function() {
        let todos = new Array();

        if (sessionStorage.getItem('todos') == undefined || sessionStorage.getItem('todos') == null) {
            sessionStorage.setItem('todos', JSON.stringify(todos));
        }
        else {
            todos = JSON.parse(sessionStorage.getItem('todos'));
        }

        return todos;
    },
    getById: function(id) {
        sessionStorage.getItem('todos').forEach(item => {
            if (item.getId() == id) {
                return item;
            }
        });
    },
    add: function(todo) {        
        if (todo == null || todo == undefined) {
            throw new Error('Invalid objet todo');
        }
        let todos = JSON.parse(sessionStorage.getItem('todos'));
        todos.push(todo);
        sessionStorage.setItem('todos', JSON.stringify(todos));
    },
    delete: function(todo) {
        if (todo == null || todo == undefined) {
            throw new Error('Invalid objet todo');
        }
        let todos = JSON.parse(sessionStorage.getItem('todos'));
        let indexToRemove = todos.map(item => {
            return item.getId();
        }).indexOf(todo.getId());

        if (indexToRemove == null || indexToRemove == undefined) {
            throw new Error('Invalid objet todo');
        }
        todos.slice(indexToRemove, 1);
        sessionStorage.setItem('todos', todos);
    }
}