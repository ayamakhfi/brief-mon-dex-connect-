 
 import { affichercartes } from "../ui.js";
// --------------------charger les créature-----------------
// ----------------------------rendre objet simple---------------------
  const créaturedétail=[];
const créaturesURL=[];
 export async function chargercréature(){
  const dataurl="https://pokeapi.co/api/v2/pokemon?limit=20&offset=0";
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
     console.log(créaturesURL);
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







