import Handlebars from 'handlebars';
import indexTemplate from './views/index.html';
import addEditTemplate from './views/add-edit.html';
import todoRepository from './data/todo.repository';
import Todo from './models/todo.model';
import uuidv1 from 'uuid/v1';
import status from './models/status.model';

const view = function(template, params) {
    let templateScript = Handlebars.compile(template);
    var html = templateScript(params);
    return html;
}

export default {

    index: function() {        
        return view(indexTemplate, todoRepository.getAll());
    },
    showNewView: function() {
        let todo = new Todo('', '', Date.now(), status.Active);
        return view(addEditTemplate, todo);
    },
    save: function(data) {
        let todo = new Todo(uuidv1(), data[0].value, data[1].value, data[2].value)
        todoRepository.add(todo);
    }
}