 
 
// --------------------charger les créature-----------------
 export async function chargercréature(){
  const url="https://pokeapi.co/api/v2/pokemon?limit=20&offset=0";
  try{
    const response=await fetch(url);
    if(!response.ok){
      throw new Error(`Response status:${response.status}`);
    }
    const result=await response.json();
    console.log(result);
  }
  catch(error){
    console.error(error.message);
  }
}

