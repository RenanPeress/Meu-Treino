const homem = document.querySelector('img.homem');
const frase = document.querySelector('p.frase'); 

document.addEventListener(recarregarPagina, () => {
    // ADICIONA A CLASS SLIDE à IMAGEM QUANDO A PAG CARREGA
    homem.classList.add('slideHomem');
});

function treinoA() {
    const modal = document.querySelector('div#modal');
    modal.style.visibility = 'visible'

    const modalContent = document.getElementById('modal-content');
    modalContent.innerHTML = '<span><h2>Costa</h2></span><span><h2>Bíceps</h2></span><span><h2>Antebraço</h2></span><span><h2>Panturrilha</h2></span>'
}

function treinoB() {
    const modal = document.querySelector('div#modal');
    modal.style.visibility = 'visible'

    const modalContent = document.getElementById('modal-content');
    modalContent.innerHTML = '<span><h2>Peitoral</h2></span><span><h2>Tríceps</h2></span><span><h2>Abdomen</h2></span>'
}

function treinoC() {
    const modal = document.querySelector('div#modal');
    modal.style.visibility = 'visible'

    const modalContent = document.getElementById('modal-content');
    modalContent.innerHTML = '<span><h2>Quadríceps</h2></span><span><h2>Posterior</h2></span><span><h2>Panturrilha</h2></span>'
}

function treinoD() {
    const modal = document.querySelector('div#modal');
    modal.style.visibility = 'visible'

    const modalContent = document.getElementById('modal-content');
    modalContent.innerHTML = '<span><h2>Ombro</h2></span><span><h2>Abdomen</h2></span>'
}

const recarregarPagina = () => {
    window.location.reload();
}

function hideModal() {
    const modal = document.querySelector('div#modal');
    modal.style.visibility = 'hidden';
}