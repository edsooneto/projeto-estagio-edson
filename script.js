let botaocompartilhar = document.querySelector('.botaocompartilhar')
let social = document.querySelector('#social')
let perfil = document.querySelector('.perfil')
let botaofechar = document.querySelector('.botaofechar')

botaocompartilhar.addEventListener('click', () => {
    perfil.style.display = 'none';
    social.classList.remove('escondido');
});

botaofechar.addEventListener('click', () => {
    perfil.style.display = 'flex';
    social.classList.add('escondido');
});