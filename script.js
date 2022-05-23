const addBtn = document.querySelector('.todo-btn-style')
const list = document.querySelector('ul')
function add() {
	const inputVal = document.querySelector('input').value /* pobieram wartosc z inputa do zmiennej inputVal */
	const listElement = document.createElement('li') /* tworze element li */
	const paragraph = document.createElement('p') /* tworze paragraf */
	listElement.classList.add('d-f') /* dodaje klase d-f do paragrafu */
	paragraph.innerHTML = inputVal /* dopisuje tresc ze zmiennej inputval do html paragrafu */
	document.querySelector('input').value = null /* czyszcze wartosc inputa */
	const button1 = document.createElement('button') /* tworze przycisk i przypisuje go do zmiennej button1*/
	const button2 = document.createElement('button') /* tworze przycisk i przypisuje go do zmiennej button2*/
	button1.classList.add('list-btn-style')
	button1.textContent = 'X'
	button2.classList.add('list-btn-style')
	button2.textContent = 'EDIT'
	list.appendChild(listElement)
	listElement.append(paragraph, button1, button2)
}

function remove() {
	const listElement = document.querySelector('li')

	list.removeChild(listElement)
}

function edit() {
	const inputPrompt = window.prompt('Change the task:')
}

addBtn.addEventListener('click', add)
document.addEventListener('click', e => {
	switch (e.target.innerHTML) {
		case 'X':
			remove()
			break
		case 'EDIT':
			edit()
			break
	}
})
