// manipulacao dos clicks dos X, modal 

const modalOverlay = document.querySelector('.modal-overlay');
// o querySelectorAll pega uma colecao, no caso, cards
const cards = document.querySelectorAll ('.card')


// a DOM é a manipulacao do html 
// o addEventListener escuta varios eventos 
for (let card of cards) {
    card.addEventListener ("click", function () {
        // na lista da classe eu vou adicionar...
        modalOverlay.classList.add('active')
    })
}

document.querySelector (".close-modal").addEventListener("click", function () {
    modalOverlay.classList.remove("active")
})