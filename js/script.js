// Função para abrir e fechar ciclos e classes
function toggleDisplay(id) {
    let element = document.getElementById(id);
    if (element.style.display === "none" || element.style.display === "") {
        element.style.display = "block";
    } else {
        element.style.display = "none";
    }
}

// Script para interações no site

document.addEventListener("DOMContentLoaded", function () {
    console.log("Site carregado com sucesso!");

    // Adicionando efeito de scroll suave
    document.querySelectorAll("a").forEach(anchor => {
        anchor.addEventListener("click", function (event) {
            if (this.getAttribute("href").startsWith("#")) {
                event.preventDefault();
                const targetId = this.getAttribute("href").substring(1);
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop,
                        behavior: "smooth"
                    });
                }
            }
        });
    });
});

const professores = {
    tics: ["Professor A", "Professor B"],
    biologia: ["Professora C", "Professor D"],
    quimica: ["Professor E", "Professora F"],
    fisica: ["Professor G", "Professor H"],
    educacao_fisica: ["Professor I", "Professora J"],
    empreendedorismo: ["Professor K"],
    historia: ["Professor L", "Professora M"],
    agropecuaria: ["Professor N", "Professor O"],
    filosofia: ["Professor P"],
    ingles: ["Professor Q", "Professor R"],
    frances: ["Professor S"],
    portugues: ["Professor T", "Professor U"]
};

function mostrarProfessores(disciplina) {
    const lista = document.getElementById("lista-professores");
    lista.innerHTML = `<h3>Professores de ${disciplina.replace('_', ' ')}</h3>`;
    lista.innerHTML += "<ul>" + professores[disciplina].map(prof => `<li>${prof}</li>`).join('') + "</ul>";
}

function toggleDisplay(id) {
    var element = document.getElementById(id);
    if (element.classList.contains("hidden")) {
        element.classList.remove("hidden");
    } else {
        element.classList.add("hidden");
    }
}
document.addEventListener("DOMContentLoaded", function () {
    const informacoes = {
        atividades: "Resumo das últimas atividades realizadas na escola, incluindo feiras de ciências e competições esportivas.",
        eventos: "Olimpíada de Matemática no dia 15 de abril e Festival Cultural no dia 30 de abril.",
        avisos: "As provas finais começam em 20 de maio. Não se esqueçam de conferir o calendário!"
    };

    document.getElementById("atividades").querySelector("p").textContent = informacoes.atividades;
    document.getElementById("eventos").querySelector("p").textContent = informacoes.eventos;
    document.getElementById("avisos").querySelector("p").textContent = informacoes.avisos;
});