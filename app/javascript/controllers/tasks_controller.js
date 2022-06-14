import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
    complete(event) {
        const
              resultDataProject = event.target.closest('.project-article').getAttribute('data-project-id'),
              resultDataTask = event.target.dataset.id,
              link = `/projects/${resultDataProject}/tasks/${resultDataTask}/complete`,
              token = document.querySelector('meta[name="csrf-token"]').content;

        fetch(link, {
            method: 'PUT',
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: {
                'Content_Type': 'application/json',
                'X-CSRF-Token': token
            },
            body: JSON.stringify({ completed: event.target.checked })
        })
            .then(response => response.json())
            .then(data => {
                console.log(data.message)
            })

        if (event.target.checked) {
            event.target
                .closest('.task-box')
                .classList.add('completed-task');
        } else {
            event.target
                .closest('.task-box')
                .classList.remove('completed-task');
        }
    }
}
