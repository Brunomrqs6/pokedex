document.addEventListener("DOMContentLoaded", function(){
    document.querySelector('#button').addEventListener('click', function(e){
        e.preventDefault();
        
        const pokemonName = document.querySelector('#pokemon-name').value;
        const nome = document.querySelector('#nome');
        const imagem = document.querySelector('#pokemon-image');
        var id = document.querySelector('#id');
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
               // tipo.innerText = poke_types.join(' ');

                var poketype1 = poke_types[0];
                var poketype2 = poke_types[1];

                tipo.innerText = poketype1;

                if (poketype2 !==  undefined) {
                    tipo2.innerText = `${poketype2}`;

                    if (poketype2.includes('electric')) {
                        adicionaEletrico1();
                    }
                    else if (poketype2.includes('fire')){
                        adicionaFire1();
                    }
                    else if (poketype2.includes('grass')){
                        adicionaGrass1();
                    }
                    else if (poketype2.includes('water')){
                        adicionaWater1();
                    }
                    else if (poketype2.includes('bug')){
                        adicionaBug1();
                    }
                    else if (poketype2.includes('dragon')){
                        adicionaDragon1();
                    }
                    else if (poketype2.includes('ground')){
                        adicionaGround1();
                    }
                    else if (poketype2.includes('ice')){
                        adicionaIce1();
                    }
                    else if (poketype2.includes('poison')){
                        adicionaPoison1();
                    }
                    else if (poketype2.includes('dark')){
                        adicionaDark1();
                    }
                    else if (poketype2.includes('steel')){
                        adicionaSteel1();
                    }
                    else if (poketype2.includes('rock')){
                        adicionaRock1();
                    }
                    else if (poketype2.includes('psychic')){
                        adicionaPsychic1();
                    }
                    else if (poketype2.includes('ghost')){
                        adicionaGhost1();
                    }
                    else if (poketype2.includes('fairy')){
                        adicionaFairy1();
                    }
                    else if (poketype2.includes('normal')){
                        adicionaNormal1();
                    }
                    else if (poketype2.includes('fighting')){
                        adicionaFighting1();
                    }
                    else if (poketype2.includes('flying')){
                        adicionaFlying1();
                    }

                }else {
                    tipo2.innerText = ` `;
                    tipo2.setAttribute('class', '')
                }

                if (poketype1.includes('electric')) {
                    adicionaEletrico();
                }
                else if (poketype1.includes('fire')){
                    adicionaFire();
                }
                else if (poketype1.includes('grass')){
                    adicionaGrass();
                }
                else if (poketype1.includes('water')){
                    adicionaWater();
                }
                else if (poketype1.includes('bug')){
                    adicionaBug();
                }
                else if (poketype1.includes('dragon')){
                    adicionaDragon();
                }
                else if (poketype1.includes('ground')){
                    adicionaGround();
                }
                else if (poketype1.includes('ice')){
                    adicionaIce();
                }
                else if (poketype1.includes('poison')){
                    adicionaPoison();
                }
                else if (poketype1.includes('dark')){
                    adicionaDark();
                }
                else if (poketype1.includes('steel')){
                    adicionaSteel();
                }
                else if (poketype1.includes('rock')){
                    adicionaRock();
                }
                else if (poketype1.includes('psychic')){
                    adicionaPsychic();
                }
                else if (poketype1.includes('ghost')){
                    adicionaGhost();
                }
                else if (poketype1.includes('fairy')){
                    adicionaFairy();
                }
                else if (poketype1.includes('normal')){
                    adicionaNormal();
                }
                else if (poketype1.includes('fighting')){
                    adicionaFighting();
                }
                else if (poketype1.includes('flying')){
                    adicionaFlying();
                }


                
                
                
            }
                 
            nome.innerText = json.name;
            imagem.src = json.sprites.front_default; 
            id.innerText = `ID: ${json.id}`
            /*if (type1 !== null) {
                tipo.innerText = type1
                tipo2.innerText = ' ';
            }if (json.types[1].type.name !== null) {
                tipo2.innerText = json.types[1].type.name
            }*/
            
        })

        
    })
})

function adicionaEletrico() {
    tipo.setAttribute('class', '--electric');
}

function adicionaFire() {
    tipo.setAttribute('class', '--fire');
}

function adicionaGrass() {
    tipo.setAttribute('class', '--grass');
}

function adicionaWater() {
    tipo.setAttribute('class', '--water');
}

function adicionaBug() {
    tipo.setAttribute('class', '--bug');
}

function adicionaDragon() {
    tipo.setAttribute('class', '--dragon');
}

function adicionaGround() {
    tipo.setAttribute('class', '--ground')
}

function adicionaIce() {
    tipo.setAttribute('class', '--ice')
}

function adicionaPoison() {
    tipo.setAttribute('class', '--poison')
}

function adicionaDark() {
    tipo.setAttribute('class', '--dark')
}

function adicionaSteel() {
    tipo.setAttribute('class', '--steel')
}

function adicionaRock() {
    tipo.setAttribute('class', '--rock')
}

function adicionaPsychic() {
    tipo.setAttribute('class', '--psychic')
}

function adicionaGhost() {
    tipo.setAttribute('class', '--ghost')
}

function adicionaFairy() {
    tipo.setAttribute('class', '--fairy')
}

function adicionaNormal() {
    tipo.setAttribute('class', '--normal')
}

function adicionaFighting() {
    tipo.setAttribute('class', '--fighting')
}

function adicionaFlying() {
    tipo.setAttribute('class', '--flying')
}

function adicionaEletrico1() {
    tipo2.setAttribute('class', '--electric');
}

function adicionaFire1() {
    tipo2.setAttribute('class', '--fire');
}

function adicionaGrass1() {
    tipo2.setAttribute('class', '--grass');
}

function adicionaWater1() {
    tipo2.setAttribute('class', '--water');
}

function adicionaBug1() {
    tipo2.setAttribute('class', '--bug');
}

function adicionaDragon1() {
    tipo2.setAttribute('class', '--dragon');
}

function adicionaGround1() {
    tipo2.setAttribute('class', '--ground')
}

function adicionaIce1() {
    tipo2.setAttribute('class', '--ice')
}

function adicionaPoison1() {
    tipo2.setAttribute('class', '--poison')
}

function adicionaDark1() {
    tipo2.setAttribute('class', '--dark')
}

function adicionaSteel1() {
    tipo2.setAttribute('class', '--steel')
}

function adicionaRock1() {
    tipo2.setAttribute('class', '--rock')
}

function adicionaPsychic1() {
    tipo2.setAttribute('class', '--psychic')
}

function adicionaGhost1() {
    tipo2.setAttribute('class', '--ghost')
}

function adicionaFairy1() {
    tipo2.setAttribute('class', '--fairy')
}

function adicionaNormal1() {
    tipo2.setAttribute('class', '--normal')
}

function adicionaFighting1() {
    tipo2.setAttribute('class', '--fighting')
}

function adicionaFlying1() {
    tipo2.setAttribute('class', '--flying')
}