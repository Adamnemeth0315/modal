const openButton = document.querySelector('.getModalBtn');
const modal = document.querySelector('.modal');
const closeModal = document.querySelector('.modal__close');
const closeButton = document.querySelector('.closebtn');

const giveClassFunction = () => modal.setAttribute('class', 'modal showModal');
const takeAwayClassFunction = () => modal.setAttribute('class', 'modal');

openButton.addEventListener('click', giveClassFunction);

/*function closeTheModal() {
    modal.style.display = 'none';
}*/

closeModal.addEventListener('click', takeAwayClassFunction);
closeButton.addEventListener('click', takeAwayClassFunction);

modal.addEventListener('click', takeAwayClassFunction);

