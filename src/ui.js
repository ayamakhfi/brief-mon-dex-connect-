
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
                         <div class="flex-row justify-between">
                          <span class="absolute left-3 top-2 font-mono text-sm text-muted">${créature.id}</span>
                          <button class="absolute right-3 top-2 font-mono text-xl text-muted ">☆</button>
                          </div>
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



// ----------------------------------affichagetypes--------------------------------
const filters=document.getElementById("filters");
export function affichertype(list){
filters.innerHTML="";
list.forEach(type=>{
const zone=document.createElement("button");
zone.className="chip bg-ink text-white border-ink shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus:outline-black";
zone.innerHTML=`<button type="button">${type}</button>`;

    filters.appendChild(zone);
});

} 



// -----------------filter------------


export function filtrer(list){
  const buttons=filters.querySelectorAll(".chip");
buttons.forEach(button=>{
  button.addEventListener("click",()=>{
   console.log("click");
  const buttontype=button.textContent.trim();
  console.log(buttontype);
  const but= list.filter(créature=> créature.type.includes(buttontype));
  
  affichercartes(but);

 });
})
}


// -------------------panneau des détail--------------------

export function panneaudétail(créature){

   document. getElementById("detail").classList.remove("hidden");
   document.getElementById("détail-id").textContent=`${créature.id}.Détail`;
   document.getElementById("détail-img").src=créature.image;
   document.getElementById("détail-img").alt=créature.name;
   document.getElementById("détail-name").textContent=créature.name;
   document.getElementById("détail-type").textContent=créature.type;
   document.getElementById("détail-descreption").textContent=créature.description;

   const stats=[
      { nom:"hp", valeur:créature.stats.hp},
      {nom:"attack",valeur:créature.stats.attack},
      {nom:"defence", valeur:créature.stats.defence}
   ];

   stats.forEach((stat)=>{
      document.getElementById(`détail-${stat.nom}`).textContent=stat.valeur;

      document.getElementById(`level-${stat.nom}`).style.width=`${Math.min(stat.valeur,100)}%`;
   });
    const detail=document.getElementById("detail");
   const fermer=document.getElementById("Fermer");
   fermer.addEventListener("click",()=>{
     detail.classList.add("hidden");
    });
   

   }
