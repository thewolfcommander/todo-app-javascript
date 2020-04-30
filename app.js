const inner = document.querySelector('.list');
const submitTask = document.querySelector('form');
const task = document.querySelector('.task');


submitTask.addEventListener('submit', (e) => {
    e.preventDefault();
    let value = submitTask.elements[0].value;

    if (value !== '') {
        let html;

        html = `
        <div class="item">
            <div class="content"><p>${value}</p></div>
            <div class="action"><button class="button">Delete</button></div>
        </div>`;
        inner.innerHTML += html;
        submitTask.reset();
    }
});

