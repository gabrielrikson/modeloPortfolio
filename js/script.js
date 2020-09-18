
function typeWriter(elemento){
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    textoArray.forEach((letra, i) => {
        setTimeout(() => elemento.innerHTML += letra, 150 * i)
    });
}

const subtitulo = document.getElementById('subtitulo');
typeWriter(subtitulo);


    var transition = document.getElementById('acao')
    transition.addEventListener('onclick', click)
     function click(){
         transition.style.transition='1s'
     }