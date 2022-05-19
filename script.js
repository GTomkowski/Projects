const addBtn = document.querySelector('.todo-btn-style')
const input = document.querySelector('input').value;

/* define a function that will distinguish whether .list-btn-style has
innerHTML = edit or innerhtml = X and will use different callbacks */





let listStore = null;
function add() {
    const inputVal = document.querySelector('input').value;
    const list = document.querySelector('ul')
    const listElement = document.createElement('li')
    listElement.classList.add('d-f')
    const paragraph = document.createElement('p')
    const button1 = document.createElement('button')
    const button2 = document.createElement('button')
    paragraph.innerHTML = inputVal;
    document.querySelector('input').value = null;
    button1.classList.add('list-btn-style')
    button1.textContent = 'EDIT'
    button2.classList.add('list-btn-style')
    button2.textContent = 'X'


    list.appendChild(listElement)
    listElement.append(paragraph,button1,button2)

    
}




addBtn.addEventListener('click',add)