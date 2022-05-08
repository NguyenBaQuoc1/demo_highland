//Close modal
var moDal = document.querySelector('.modal');
var closeModal = document.getElementById('close');
closeModal.addEventListener('click' , cLoseModal);

function cLoseModal(){
    moDal.classList.add('close-modal');
}


