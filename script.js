const addBtn = document.querySelector('.todo-btn-style')
const addBtns = document.querySelectorAll('button')
console.log(addBtn)
console.log(addBtns);



/* define a function that will distinguish whether .list-btn-style has
innerHTML = edit or innerhtml = X and will use different callbacks */

/* so what else do i need? two callbacks, one for deleting the list item and the second one for editing it */

/* adding also enter key to add a task to the list */

const list = document.querySelector('ul')
const firstElement = document.getElementById('first')
function add() {
	const inputVal = document.querySelector('input').value
	const paragraph = document.createElement('p')
	const listElement = document.createElement('li')
	listElement.classList.add('d-f')
	paragraph.innerHTML = inputVal
	document.querySelector('input').value = null
	const button1 = document.createElement('button')
	const button2 = document.createElement('button')
	button1.classList.add('list-btn-style')
	button1.textContent = 'X'
	button2.classList.add('list-btn-style')
	button2.textContent = 'EDIT'

	list.appendChild(listElement)
	listElement.append(paragraph, button1, button2)
	return listElement
}

function remove() {
	listElement.remove()
	if (firstElement) {
		firstElement.remove()
	}
}

/* co potrzebuje zrobic jeszcze

jezeli dodany element istnieje to go usun */

addBtn.addEventListener('click',add)
