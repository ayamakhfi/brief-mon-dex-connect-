import { chargercréature } from "./services/api.js";
import { affichercartes } from "./ui.js";
// chargercréature();
// affichercartes(créaturedétail);
async function showcréature(){
    try{
        const créatures=await chargercréature();
        affichercartes(créatures);
    }
    catch(error){
        console.error(error);
    }
}

showcréature();