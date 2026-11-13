
const grid=document.getElementById("grid");
 export function affichercartes(liste){
   grid.innerHTML="";

   const headercount=document.getElementById("creature-count");
   headercount.textContent=`${liste.length}`;

   liste.forEach((créature)=>{
      const totale= créature.stats.hp+créature.stats.attack+créature.stats.defence;

      const carte= document.createElement("article");
      carte.className='flex flex-col gap-3 rounded-card bg-white p-3 pb-4  hover:-translate-y-3 transition-transform duration-300 hover:shadow-lg hover:shadow-yellow-300';

      carte.innerHTML=` <div class="relative flex h-36 items-center justify-center rounded-xl bg-brand-light">
                          <span class="absolute left-3 top-2 font-mono text-sm text-muted">${créature.id}</span>
                         <img src="${créature.image}"  alt="${créature.name}"> 
          </div>

                       <div class="flex items-center justify-between gap-2">
                       <h3 class="font-display text-xl font-semibold">${créature.name}</h3>
                        <span class="rounded-full bg-brand-light px-3 py-1 text-sm font-bold text-ink">${créature.type}</span>
          </div>
                     <p class="text-sm text-muted">${créature.level} · Total ${totale}</p>
         
                      <button type="button" data-action="ajouter" data-id="${créature.id}" class="btn-outline border-[#C60000] text-[#C60000] 
          focus-visible:outline-2 focus-visible:outline-offset-2 focus:outline-black">Ajouter à l'équipe</button>`;

          carte.addEventListener("click",()=>{
            panneaudétail(créature);
          });
           grid.appendChild(carte);
      });
   }

  
