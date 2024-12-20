function mostrarExercicio(nrExercicio) {

    const codes = document.querySelectorAll('.code');
    codes.forEach(function(code) {
        code.classList.add('hidden');
    });


    const exercicio = document.getElementById(nrExercicio);
    exercicio.classList.remove('hidden');

    hljs.highlightElement(selectedCode.querySelector('code'));
}

window.onload = function() {
    mostrarExercicio('ex01');
};