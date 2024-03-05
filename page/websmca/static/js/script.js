document.addEventListener('DOMContentLoaded', function () {
    const questions = document.querySelectorAll('.question');

    questions.forEach(question => {
        question.addEventListener('click', function () {
            // Toggle de la clase 'active' en la pregunta para desplegar o contraer la respuesta
            this.classList.toggle('active');

            // Mostrar o ocultar la respuesta asociada
            const answer = this.nextElementSibling;
            if (answer.style.maxHeight) {
                answer.style.maxHeight = null;
            } else {
                answer.style.maxHeight = answer.scrollHeight + 'px';
            }
        });
    });
});
