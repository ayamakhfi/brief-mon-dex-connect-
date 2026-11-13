# Mon Dex — dépôt de départ

Sprint 3 — Brief 1. Pokédex est une application web développée avec HTML, JavaScript et Tailwind CSS. Elle utilise l'API PokéAPI pour récupérer et afficher des Pokémon sous forme de cartes. L'application permet de consulter les détails des Pokémon, de rechercher par nom, de filtrer par type et de charger progressivement davantage de Pokémon grâce à la pagination. 

## Installation

Prérequis : [Node.js](https://nodejs.org) (version 18 ou plus).

```bash
npm install
npm run dev
```

`npm run dev` surveille vos fichiers et régénère `dist/output.css` à chaque modification. Ouvrez ensuite `index.html` dans votre navigateur (ou avec l'extension Live Server).

Avant de mettre en ligne sur GitHub Pages :

```bash
npm run build
```

Puis committez `dist/output.css` : GitHub Pages ne lance pas Tailwind pour vous.

## Contenu du dépôt

| Fichier | Rôle |
| --- | --- |
| `index.html` | La page Dex, statique, avec 35 cartes écrites à la main |
| `tailwind.config.js` | Le thème neutre à remplacer par celui de votre univers |
| `src/input.css` | Les directives Tailwind et quelques classes de composants |
| `dist/output.css` | Le CSS généré par Tailwind (ne pas modifier à la main) |
| `src/main.js` |  Le point de départ : il écoute les clics et appelle les autres fichiers|
| `src/ui.js` | Tout l'affichage : cartes, détail, états chargement, vide, erreur|
| `src/service/api.js` | Tous les appels à l'API (fetch) et la transformation du JSON|

| `script.js` | Votre JavaScript, avec la liste des fonctionnalités à coder |
| `design/` | La maquette de la version finale |

## 

- **Univers choisi :** [Pokémon ]
- **Lien GitHub Pages :** []

## API utilisée:
[https://pokeapi.co/api/v2/pokemon?limit=20&offset=0].


## Source 
[https://www.pokebip.com/] (tout les information de créatures)
[https://www.pokemon.com/us] (les images et les descriptions)


## La validation du formulaire de création:
- Numéro:
Exemples de valeurs valides/invalides:
regexId= /^#\d{3}$/;
  //ID
  console.log("Id",regexId.test("#100")); //true
 console.log("Id",regexId.test("#999")); //true
 console.log("Id",regexId.test("100"));   //false
 console.log("Id",regexId.test("#1000"));//false

- NOM:
regexNom=/^[A-Za-zÀ-ÿ0-9][A-Za-zÀ-ÿ0-9 .'-]{1,29}$/;
Exemples de valeurs valides/invalides:
//NOM
 console.log("nom",regexNom.test("Pikachu")); //true
 console.log("nom",regexNom.test("Dracaufeu 2"));//true
 console.log("nom",regexNom.test("Méga(y)"));//false
 console.log("nom",regexNom.test("@Méga-Raichu Y"));//false

 - Niveau:
  regexNiveau=/^(Base|Niveau([1-9]|[1-9]\d|100))$/i;
 Exemples de valeurs valides/invalides:
 //NIVEAU
  console.log("Niveau",regexNiveau.test("base")); //true
 console.log("Niveau",regexNiveau.test("Niveau100"));//true
 console.log("Niveau",regexNiveau.test("0"));//false
 console.log("Niveau",regexNiveau.test("Niveau0"));//false

 - STATISTIQUE:
 regexStatic=/^\d{1,3}$/;
 Exemples de valeurs valides/invalides:
//STATISTIQUE
 console.log("Statistique",regexStatic.test("0")); //true
 console.log("Statistique",regexStatic.test("999"));//true
 console.log("Statistique",regexStatic.test("pv55"));//false
 console.log("Statistique",regexStatic.test("1000"));//false

 - lien d'image:
 regexImg=/^https:\/\/\S+\.(png|jpe?g|webp|gif)$/i;
 Exemples de valeurs valides/invalides:
   //IMAGE
 console.log("Image",regexImg.test("https://site.com/image.png")); //true
 console.log("Image",regexImg.test("https://site.com/photo.jpg"));//true
 console.log("Image",regexImg.test("image.png"));//false
 console.log("Image",regexImg.test("https://site.com/image.pdf"));//false

 - Description:
 regexMessage=/^[\s\S]{10,200}$/;
 Exemples de valeurs valides/invalides:
 //MESSAGE
  console.log("Description",regexMessage.test("Un Pokémon très puissant")); //true
 console.log("Description",regexMessage.test("Créature de type feu."));//true
 console.log("Description",regexMessage.test("hello"));//false
 console.log("Description",regexMessage.test(""));//false




