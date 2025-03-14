document.addEventListener('DOMContentLoaded', function() {
    // Validação do formulário de contato
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', function(event) {
            const name = document.getElementById('name').value;
            const message = document.getElementById('message').value;

            if (name.trim() === '' || message.trim() === '') {
                alert('Por favor, preencha todos os campos.');
                event.preventDefault();
            } else {
                alert('Mensagem enviada com sucesso!');
                // Aqui você pode adicionar o código para enviar o formulário via AJAX
            }
        });
    }

    // Navegação suave
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});

function toggleClasses(cycleId) {
    const cycle = document.getElementById(cycleId);
    if (cycle.style.display === 'none' || cycle.style.display === '') {
        cycle.style.display = 'block';
    } else {
        cycle.style.display = 'none';
    }
}

function toggleBooks(classId) {
    const books = document.getElementById(classId);
    if (books.style.display === 'none' || books.style.display === '') {
        books.style.display = 'block';
    } else {
        books.style.display = 'none';
    }
}

function openBook(bookName) {
    alert(`Abrindo o livro: ${bookName}`);
    // Aqui você pode adicionar o código para abrir ou baixar o livro
}