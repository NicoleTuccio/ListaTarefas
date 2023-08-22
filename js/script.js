document.addEventListener("DOMContentLoaded", function () {
    const formulario = document.getElementById("formulario");
    const listaTarefas = document.getElementById("listaTarefas");

    formulario.addEventListener("submit", function (event) {
        event.preventDefault();
        adicionarTarefa();
    });
});

    const adicionarTarefa = () => {
        const descricao = document.getElementById("idDescricao").value;
        const autor = document.getElementById("idAutor").value;
        const departamento = document.getElementById("idDepartamento").value;
        const importancia = document.getElementById("idImportancia").value;
        const valor = document.getElementById("idValor").value;
        const duracao = document.getElementById("idDuracao").value;

        const newRow = listaTarefas.insertRow();
        newRow.innerHTML = `
            <td>${descricao}</td>
            <td>${autor}</td>
            <td>${departamento}</td>
            <td>${importancia}</td>
            <td>${valor}</td>
            <td>${duracao}</td>
            <td><input type="checkbox"></td>
        `;

        formulario.reset();
    };

    const removerTarefasConcluidas = () => {
        const checkboxes = listaTarefas.querySelectorAll('input[type="checkbox"]:checked');
        checkboxes.forEach((checkbox) => {
            const row = checkbox.parentNode.parentNode;
            listaTarefas.removeChild(row);
        });
    };

    const removerBotao = document.getElementById("remover");
    removerBotao.addEventListener("click", function (event) {
        event.preventDefault();
        removerTarefasConcluidas();
    });