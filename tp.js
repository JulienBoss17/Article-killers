const tueur = [
    {
      titre: "Ogre de Santa Cruz",
      nomDuTueur: "<strong>Nom Du Tueur :</strong> Edmund Emil Kemper III",
      age: "<strong>Age :</strong> 18 décembre 1948",
      sexe: "<strong>Sexe :</strong> Masculin",
      description:
        "<strong>Statut du tueur :</strong> Meurtrier, Nécrophile, Viol.",
      anneeDuCrime:
        "<strong>Année Du Crime :</strong> 27 août 1964-21 avril 1973",
      nombreDeVictime: "<strong>Nombre De Victime :</strong> 10",
      anneeDeSortie: "<strong>Date De Modif :</strong> 23 novembre 2024",
      nomDeLauteur: "Aude/Wikipédia",
      cover:
        "https://upload.wikimedia.org/wikipedia/commons/2/2c/Kempermugshot.jpg?20160323074306",
    },
    {
      titre: "Manson",
      nomDuTueur: "<strong>Nom du Tueur:</strong> Charles Manson",
      age: "<strong>Age :</strong> mort a 83 ans",
      sexe: "<strong>Sexe :</strong> Masculin",
      description:
        "<strong>Statut du tueur :</strong> Criminel, Tueur en serie, Gourou, Musicien.",
      anneeDuCrime:
        "<strong>Année du crime:</strong> 8 aout 1969 au 10 aout 1969",
      nombreDeVictime: "<strong>Nombre De Victime :</strong>  7 ",
      anneeDeSortie: "<strong>Date de Modif :</strong> 14 Septembre 2024",
      nomDeLauteur: "Mickael/Wikipedia",
      cover:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Manson1968.jpg/300px-Manson1968.jpg",
    },
    {
      titre: "Le Cannibale de Milwaukee ",
      nomDuTueur: "<strong> Nom Du Tueur :</strong> Jeffrey Dahmer",
      age: "<strong> Age :</strong> 34 ans",
      sexe: "<strong> Sexe :</strong> Masculin",
      description:
        "<strong> Statut Du Tueur :</strong> Meurtres, Agressions sexuelles, Exhibitionnisme, Cannibalisme.",
      anneeDuCrime: "<strong> Année Du Crime :</strong> entre 1978 et 1991",
      nombreDeVictime: "<strong> Nombre De Victime :</strong> 17 jeunes hommes",
      anneeDeSortie: "<strong> Date De Modification :</strong> 27 novembre 2024",
      nomDeLauteur: "Julien.B/Wikipédia",
      cover:
        "https://upload.wikimedia.org/wikipedia/commons/d/d5/Jeffrey_Dahmer_HS_Yearbook.jpg",
    },
  ];
  
  // const articles = document.createElement("div");
  // articles.classList.add("articles");
  // console.log(articles);
  
  // const article = document.createElement("div");
  // article.classList.add("article");
  
  // articles.appendChild(article);
  
  // document.body.appendChild(articles)
  
  // const articles = document.getElementById('articles')
  
  const articles = document.getElementById("articles");
  
  for (let i = 0; i < tueur.length; i++) {
    articles.innerHTML += `<div class="article">
                             <h2>${tueur[i].titre}</h2>
                             <ul class="charlesManson">
                             <li>${tueur[i].nomDuTueur}</li>
                             <li>${tueur[i].age}</li>
                             <li>${tueur[i].sexe}</li>
                             <li>${tueur[i].description}</li>
                             <li>${tueur[i].anneeDuCrime}</li>
                             <li>${tueur[i].nombreDeVictime}</li>
                             <li>${tueur[i].anneeDeSortie}</li>
                             <li>${tueur[i].nomDeLauteur}</li>
                             </ul>
                             <img src="${tueur[i].cover}" alt="Portrait de tueurs">
                             </div>`;
  }

