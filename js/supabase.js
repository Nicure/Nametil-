// Conectar ao Supabase
const SUPABASE_URL = "https://owrxjqdvxdqehcyxovcn.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im93cnhqcWR2eGRxZWhjeXhvdmNuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDE3MjcxMzcsImV4cCI6MjA1NzMwMzEzN30.w_KfkyS-g-ffpNpfghfZMMPqEB9T7bY5CrfDpOPhSmA";

const supabase = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Função para carregar livros da biblioteca
async function carregarBiblioteca() {
    let { data, error } = await supabase.from("biblioteca").select("*");

    if (error) {
        console.error("Erro ao buscar livros:", error);
        return;
    }

    const bibliotecaDiv = document.getElementById("biblioteca");
    let html = "";

    // Agrupar por ciclos e classes
    const ciclos = {};
    data.forEach(livro => {
        if (!ciclos[livro.ciclo]) {
            ciclos[livro.ciclo] = {};
        }
        if (!ciclos[livro.ciclo][livro.classe]) {
            ciclos[livro.ciclo][livro.classe] = [];
        }
        ciclos[livro.ciclo][livro.classe].push(livro);
    });

    // Criar a interface de ciclos e classes dinamicamente
    for (const ciclo in ciclos) {
        html += `<h2 onclick="toggleDisplay('${ciclo}')">${ciclo} ⮟</h2><ul id="${ciclo}" class="hidden">`;
        for (const classe in ciclos[ciclo]) {
            html += `<li onclick="toggleDisplay('${classe}')">${classe} ⮟</li><ul id="${classe}" class="hidden">`;
            ciclos[ciclo][classe].forEach(livro => {
                html += `<li><a href="${livro.arquivo}" target="_blank">${livro.disciplina}</a></li>`;
            });
            html += "</ul>";
        }
        html += "</ul>";
    }

    bibliotecaDiv.innerHTML = html;
}

// Função para carregar informações da vitrine
async function carregarVitrine() {
    let { data, error } = await supabase.from("vitrine").select("*");

    if (error) {
        console.error("Erro ao buscar informações da vitrine:", error);
        return;
    }

    const vitrineDiv = document.getElementById("vitrine");
    let html = "";

    data.forEach(info => {
        html += `<div class="info-box"><h2>${info.titulo}</h2><p>${info.descricao}</p></div>`;
    });

    vitrineDiv.innerHTML = html;
}

// Chamar funções ao carregar a página
document.addEventListener("DOMContentLoaded", () => {
    if (document.getElementById("biblioteca")) {
        carregarBiblioteca();
    }
    if (document.getElementById("vitrine")) {
        carregarVitrine();
    }
});