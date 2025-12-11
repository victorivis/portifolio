const toggle = document.getElementById('lang-switch');
const optionEn = document.getElementById('option-en');
const optionPt = document.getElementById('option-pt');
const conteudos = ['.pt-content', '.en-content'];

function inicializar(pos){
    for(let i=0; i<conteudos.length; i++){
        if(i != pos){
            const conteudo = document.querySelectorAll(conteudos[i]);
            conteudo.forEach(el => el.classList.add('hidden'));
        }
        console.log(i != pos);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    inicializar(0);
});

toggle.addEventListener('change', () => {
    const ptContents = document.querySelectorAll('.pt-content');
    const enContents = document.querySelectorAll('.en-content');

    if (toggle.checked) {
        //alert('English');
        ptContents.forEach(el => el.classList.add('hidden'));
        enContents.forEach(el => el.classList.remove('hidden'));

    } else {
        //alert('Portuguese');
        enContents.forEach(el => el.classList.add('hidden'));
        ptContents.forEach(el => el.classList.remove('hidden'));
    }
});
