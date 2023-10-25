import {article} from "./utilityFinal.js";
let pokemonList = []; 
const btn = document.querySelector('#btn');
//const article = document.querySelector('article');
const cachedPokes = document.querySelector('#catchedPokemon >ul');

btn.addEventListener('click',() =>{        
    reset();
    getPokemon();       
});
//https://pokeapi.co/api/v2/pokemon/[agregar aqui el nombre]

function reset(){
    article.innerHTML = '';
}

let getPokemon = async () => {
    let inputText = document.querySelector('#inputText').value;    
    //console.log(inputText);
    let url = `https://pokeapi.co/api/v2/pokemon/${inputText}`;
    const response = await fetch(url);
    if (response.ok){
     pokemonList = await response.json();     
     displayPokemon(pokemonList, inputText);    
    }
    else{
     alert('Pokemon not found..!');
    }
 }

let displayPokemon = (list_,inputText) =>{    
    let h3_ = document.createElement('h3');    
    let img_ = document.createElement('img');
    h3_.textContent = list_.name;
    img_.setAttribute('src',`${list_.sprites.other.dream_world.front_default}`);
    img_.setAttribute('width','290px');
    article.append(h3_, img_);  
     //jail section
    let imgCatched = document.createElement('img');
    imgCatched.setAttribute('src', `${list_.sprites.other.dream_world.front_default}`);
    imgCatched.setAttribute('width','100px');        
    cachedPokes.appendChild(imgCatched);    
}







