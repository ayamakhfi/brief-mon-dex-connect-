 
 
// --------------------charger les créature-----------------
const créaturesURL=[];
 export async function chargercréature(){
  const dataurl="https://pokeapi.co/api/v2/pokemon?limit=20&offset=0";
  try{
    const response=await fetch(dataurl);
    if(!response.ok){
      throw new Error(`Response status:${response.status}`);
    }
    const result=await response.json();
    console.log(result);

    for(const créature of result.results){
      const détailurl= await fetch(créature.url);
      if(!détailurl.ok){
        throw new Error(`Response status:${response.status}`)
      }
      const détail=détailurl.json();
      // console.log("détail",détail);
        créaturesURL.push(détail);
    }
     console.log(créaturesURL)
    
  }
  catch(error){
    console.error(error.message);
  }
}
 

//stats


//front_default

