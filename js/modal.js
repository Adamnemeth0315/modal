const openButton = document.querySelector('.getModalBtn');
const modal = document.querySelector('.modal');
const closeModal = document.querySelector('.modal__close');


openButton.addEventListener('click', function (){
    modal.style.display = 'block';
});

function closeTheModal() {
    modal.style.display = 'none';
}

closeModal.addEventListener('click', closeTheModal);

window.addEventListener('click', function (ev){
    if (ev.target == modal) {
        modal.style.display = 'none';
    }
});

