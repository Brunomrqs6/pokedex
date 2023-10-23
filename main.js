document.addEventListener("DOMContentLoaded", function(){
    document.querySelector('#button').addEventListener('click', function(e){
        e.preventDefault();
        
        const pokemonName = document.querySelector('#pokemon-name').value;
        const nome = document.querySelector('#nome');
        const imagem = document.querySelector('#pokemon-image');
        var tipo = document.querySelector('#tipo');
        var tipo2 = document.querySelector('#tipo2')
        const endpoint = `https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`;
        




        fetch(endpoint)
        .then(function(resposta){
            return resposta.json()
        })
        .then(function(json) {
            var poke_types = [];
            
            const tamanho = json.types.length

            for (let i = 0; i < tamanho ; i ++) {
                poke_types.push(json.types[i].type.name)
                tipo.innerText = poke_types.join(', ')
            }
            


            
            nome.innerText = json.name;
            imagem.src = json.sprites.front_default; 
            /*if (type1 !== null) {
                tipo.innerText = type1
                tipo2.innerText = ' ';
            }if (json.types[1].type.name !== null) {
                tipo2.innerText = json.types[1].type.name
            }*/
            
            
        })

        
    })
})
