let botaocompartilhar = document.getElementById('compartilhar')
let social = document.getElementById('social')
let perfil = document.getElementById('perfil')
let botaofechar = document.getElementById('fechar')

botaocompartilhar.addEventListener('click', () => {
    perfil.style.display = 'none';
    social.classList.remove('escondido');
});

botaofechar.addEventListener('click', () => {
    perfil.style.display = 'flex';
    social.classList.add('escondido');
});