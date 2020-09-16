/* eslint-disable strict */
function main() {
    $('#js-shopping-list-form').on('submit', function (evt) {
        evt.preventDefault();
        let item = $('#shopping-list-entry').val();
        let template = `
                        <li>
                        <span class="shopping-item">${item}</span>
                        <div class="shopping-item-controls">
                        <button class="shopping-item-toggle">
                            <span class="button-label">check</span>
                        </button>
                        <button class="shopping-item-delete">
                            <span class="button-label">delete</span>
                        </button>
                        </div>
                        </li>
                        `;

        $('.shopping-list').append(template);
    });

$('.shopping-list').on('click', '.shopping-item-toggle', (e) => {
    let aunt = $(e.currentTarget).parent().siblings();
    aunt.toggleClass('shopping-item__checked');
});

$('.shopping-list').on('click', '.shopping-item-delete', (e) => {
    let aunt = $(e.currentTarget).parent().parent();
    aunt.remove();
});


}

$(main)






