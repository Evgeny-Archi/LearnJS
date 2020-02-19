const $ = {};

function createModal(options) {
    const modal = document.createElement("div");
    modal.classList.add("modal");
    modal.insertAdjacentHTML("afterbegin", `
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Modal title</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <p>Modal body text goes here.</p>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
    `);
    document.body.appendChild(modal);
    return modal;
}

$.modal = function(options) {
    const $modal = createModal(options);
    return {
        open() {
            $modal.classList.add("open");
        },
        close() {
            $modal.classList.remove("open");
        },
        destroy() {}
    }
}

const modal = $.modal();

// Вызов через консоль modal.open()