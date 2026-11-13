 
 import { affichercartes } from "../ui.js";
// --------------------charger les créature-----------------
// ----------------------------rendre objet simple---------------------
  const créaturedétail=[];
const créaturesURL=[];
 export async function chargercréature(offset){
  const dataurl=`https://pokeapi.co/api/v2/pokemon?limit=20&offset=${offset}`;
    const créaturedétail=[];

 
  try{
    const response=await fetch(dataurl);
    if(!response.ok){
      throw new Error(`Response status:${response.status}`);
    }
    const result=await response.json();
    // console.log(result);

    for(const créature of result.results){
      const détailurl= await fetch(créature.url);
      if(!détailurl.ok){
        throw new Error(`Response status:${response.status}`)
      }
      const détail=await détailurl.json();
      // console.log("détail",détail);
        créaturesURL.push(détail);
        // console.log(détail);

    }
     console.log("bb",créaturesURL);
     créaturesURL.forEach((créature)=>{
    let information={
      id:"#"+String(créature.id).padStart(3,"0"),
      name:créature.name, 
      type: créature.types.map((items)=>{return items.type.name}),
      level:"base",
      stats:{hp:créature.stats[0].base_stat,
             attack:créature.stats[1].base_stat,
             defence:créature.stats[2].base_stat,},
      image:créature.sprites.other["official-artwork"].front_default
      // description:effect_entries.effect //abilities.url

    }
    créaturedétail.push(information);
   
  });
  return créaturedétail;
 
  }
  catch(error){
    console.error(error.message);
  }
}
 


//stats


//front_default

// ----------------------------recherche--------------------

export async function recherchecréature(inputrech){
  let search=[];
  
   const messageerreur=inputrech.parentElement.querySelector(".message")
  
  const name= inputrech.value;
  const regexnom=/^[a-z]+$/;
  if (!regexnom.test(name)){
    messageerreur.textContent="Veuillez saisir un nom en anglais et en minuscules.";
    messageerreur.classList.add("text-red-500");
    return;
  }
  messageerreur.textContent="";
  messageerreur.classList.remove("text-red-500");

  const nomurl=`https://pokeapi.co/api/v2/pokemon/${name}`
  try{
      const respond= await fetch(nomurl);
     
    if(!respond.ok){
      throw new Error(`Respond status:${respond.status}`)
    }

     const data=await respond.json();
      let information={
      id:"#"+String(data.id).padStart(3,"0"),
      name:data.name, 
      type: data.types.map((items)=>{return items.type.name}),
      level:"base",
      stats:{hp:data.stats[0].base_stat,
             attack:data.stats[1].base_stat,
             defence:data.stats[2].base_stat,},
      image:data.sprites.other["official-artwork"].front_default
      // description:effect_entries.effect //abilities.url

    }

    console.log(information);
    search.push(information);
    affichercartes(search);

  }
   catch(error){
    console.error(error.message);
    messageerreur.textContent="pokémon introuvable";
   }
}





