// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"

document.addEventListener('click', (event) => {
    let tap = event.target;

    if (tap.classList.contains('project-cross-icon')) {
        editTodo(tap);
    }

    if (tap.classList.contains('edit-icon')) {
        editTask(tap);
    }

    if (tap.classList.contains('check-task')) {
        backToReadonlyFields(tap);
    }
});

function editTodo (edit) {
    let result = edit
        .closest('.todo-title-block')
        .querySelector('.edit-title-box input');

    edit.classList.add('hide');

    edit
        .closest('.todo-title-block')
        .querySelector('.project-check-icon')
        .classList.add('show');

    result
        .classList.add('show');

    result.focus();

    result.setSelectionRange(result.value.length,result.value.length);

    edit
        .closest('.todo-header')
        .querySelector('h3')
        .classList.add('hide');
}

function editTask (edit) {
    edit
        .closest('.task-box')
        .querySelector('.todo-list-task-title')
        .classList.add('hide');

    edit
        .closest('.task-box')
        .querySelector('.edit-task-wrap')
        .classList.add('show');

    edit
        .closest('.task-box')
        .querySelector('.edit-icon')
        .classList.add('hide');

    edit
        .closest('.task-box')
        .querySelector('.check-task')
        .classList.add('show');
}

function backToReadonlyFields (field) {
    field
        .closest('.task-box')
        .querySelector('.todo-list-task-title')
        .classList.add('show');

    field
        .closest('.task-box')
        .querySelector('.edit-task-wrap')
        .classList.add('hide');

    field
        .closest('.task-box')
        .querySelector('.edit-icon')
        .classList.add('show');

    field
        .closest('.task-box')
        .querySelector('.check-task')
        .classList.add('hide');

    field
        .closest('.task-box')
        .querySelector('.edit-hide-button')
        .click()
}
import "@rails/request.js"
