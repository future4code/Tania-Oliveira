let postagem = null

function recolheDados() {
    let tituloPost = document.getElementById('titulo')
    let autorPost = document.getElementById('autor')
    let conteudoPost = document.getElementById('conteudo')
    
    postagem = {
        titulo: tituloPost.value,
        autor: autorPost.value,
        conteudo: conteudoPost.value
    }
    console.log(postagem)
    tituloPost.value = ""
    autorPost.value = ""
    conteudoPost.value = ""
}

function exibeDados() {
    let containerDePosts = document.getElementById ('containerDePosts')
    containerDePosts.innerHTML += `<p>Título: ${postagem.titulo}</p><p>Autor: ${postagem.autor}</p><p>Conteúdo: ${postagem.conteudo}</p>`
}