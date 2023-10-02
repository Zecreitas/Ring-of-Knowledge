

let endpoint = "https://eldenring.fanapis.com/api/weapons?limit=100"
let i = 0
let vetor = []
let lista = document.getElementById("lista")

fetch(endpoint)
.then(resposta=>resposta.json())
.then(dados=>{
    console.log(dados)
    let armas = dados.data
    console.log(armas)
    armas.forEach(postagem =>{
        let item = document.createElement('li');
        item.textContent = postagem.name;
        lista.appendChild(item);

        let imagem = document.createElement('img');
        imagem.src = postagem.image;
        item.appendChild(imagem);
    })
})

let endpoint1 = "https://eldenring.fanapis.com/api/armors?limit=100"
let i1 = 1
let vetor1 = []
let lista1 = document.getElementById("lista1")

fetch(endpoint1)
.then(resposta=>resposta.json())
.then(dados1=>{
    console.log(dados1)
    let armor = dados1.data
    console.log(armor)
    armor.forEach(postagem =>{
        let item1 = document.createElement('li');
        item1.textContent = postagem.name;
        lista1.appendChild(item1);

        let imagem1 = document.createElement('img');
        imagem1.src = postagem.image;
        item1.appendChild(imagem1);
    })
})


