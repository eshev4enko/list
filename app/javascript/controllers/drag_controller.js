import { Controller } from "@hotwired/stimulus"
import { put } from '@rails/request.js'
import Sortable from "sortablejs"

export default class extends Controller {
    connect() {
        this.sortable = Sortable.create(this.element, {
            animation: 150,
            onEnd: this.updatePosition.bind(this)
        })
    }

    async updatePosition(event) {
      const
        projectTopId = event.item.closest('.project-article').dataset.projectId,
        link = `/projects/${projectTopId}/tasks/sort`,
        response = await put(link, {
            body: JSON.stringify({
                sgid: event.item.dataset.sgid,
                position: event.newIndex + 1
            })
        })
        if (response.ok) {
            console.log(event)
            console.log(event.item.dataset.sgid)
        }
    }
}
