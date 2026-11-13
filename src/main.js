import { chargercréature } from "./services/api.js";
import { affichercartes ,recherchefiltre } from "./ui.js";

const dataurl="https://pokeapi.co/api/v2/pokemon?limit=20&offset=0";



let offset=0;
let créatures = []

async function showcréature(){
    try{
        const data = await chargercréature(offset);
      
        console.log("a",data)

        // -------affichage des cartes-----------
        affichercartes(data);

        // ------------list des types---------------
          let res= await typelist(data);
          console.log (res);


      
    }
    catch(error){
        console.error(error);
    }
}

showcréature()

const button=document.getElementById("pagination");
button.addEventListener("click",async()=>{
    offset+=20;

    showcréature();


});



// ---------------------------------------tout les types------------------------
  async function typelist(list){
   
    const types=list.flatMap(array=>array.type);//map()return tableau of tableaus ,flatMap return un seultableau



    const uniqueversion=[...new Set(types)];
return uniqueversion;
}



