import { chargercréature } from "./services/api.js";
import { affichercartes } from "./ui.js";

const dataurl="https://pokeapi.co/api/v2/pokemon?limit=20&offset=0";



let offset=0;
let créatures = []

async function showcréature(){
    try{
        const data = await chargercréature(offset);
      
        console.log("a",data)
        affichercartes(data);
    }
    catch(error){
        console.error(error);
    }
}

showcréature()

const button=document.getElementById("pagination");
button.addEventListener("click",async()=>{
    offset+=20;

   await showcréature(créatures);


});