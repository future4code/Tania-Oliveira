function criarTarefa() {
    let diaSemana = document.getElementById('dias-semana').value
    let tarefaAdicionada = document.getElementById('tarefa').value
    document.getElementById(diaSemana).innerHTML += "<p>- " + tarefaAdicionada + "</p>"
    document.getElementById('tarefaAdicionada').value = ""
    document.getElementById("dias-semana").value = 'domingo'
    

}