var usuarios = [
    { nome: "Diego", habilidades: ["Javascript", "ReactJS", "Redux"] },
    { nome: "Gabriel",habilidades: ["VueJS", "Ruby on Rails", "Elixir"] }
];

function mostra(us){
    for (u of us) {
        console.log("O " + u.nome + " possui as habilidades: " + u.habilidades.join(", "));
    }
}

mostra(usuarios);