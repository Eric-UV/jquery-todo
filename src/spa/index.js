import todoController from './todo/todo.controller';
import $ from 'jquery';

const todo = function() { 

    const routes = {
        '#/': todoController.index,
        '#/product-detail': todoController.showNewView
    };

    function hashHandler() {
        console.log('The hash has changed!', location.hash);
        const hash = !location.hash ? '#/' : location.hash;
        $('#main-content').html(routes[hash]());
    }
    
    $('#main-content').on('click', '#save-edit', () => todoController.save($('#todo-form').serializeArray()));
    $(window).on('hashchange',hashHandler);
    //window.addEventListener('hashchange', hashHandler, false);
}

export default todo;