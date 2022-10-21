function print() {
    const persone1 = new person('Wayne','Barnadet','Funder & CEO', './img/wayne-barnett-founder-ceo.jpg');
    const persone2 = new person('Barbara','Ramos','Graphic Desiner', './img/barbara-ramos-graphic-designer.jpg');
    const persone3 = new person('Angela','Carol','Chief Editor', './img/angela-caroll-chief-editor.jpg');
    const persone4 = new person('Walter','Gordon','Office Menager', './img/walter-gordon-office-manager.jpg');
    const persone5 = new person('Angela','Lopez','Social Media Menager', './img/angela-lopez-social-media-manager.jpg');
    const persone6 = new person('Scott','Estrada','Developer', './img/scott-estrada-developer.jpg');
    const team = [persone1, persone2, persone3, persone4, persone5, persone6];
    function person (nome,cognome,ruolo,immagine){
        this.nomePersona = nome;
        this.cognomePersona = cognome;
        this.ruoloPersona = ruolo;
        this.immaginePersona = immagine;
        this.card = function() {
          const divContainer = document.getElementById('container');
          divContainer.classList.add('cards');
          const cardDiv = document.createElement('div');
          cardDiv.classList.add('p-4');
          cardDiv.classList.add('card-person');
          // img
          const img = document.createElement('img');
          img.src = this.immaginePersona;
          cardDiv.append(img);
          // nome cognome
          const nomeCognome = document.createElement('h2');
          nomeCognome.append(this.nomePersona+" "+ this.cognomePersona);
          cardDiv.append(nomeCognome);
          // ruolo
          const ruolo = document.createElement('h4');
          ruolo.append(this.ruoloPersona);
          cardDiv.append(ruolo);
          divContainer.append(cardDiv);
        }
    }
    // aggiungiamo nuovo membro team
    function newPerson() {
        const nome = document.getElementById('form-nome');
        const cognome = document.getElementById('form-cognome');
        const ruolo = document.getElementById('form-ruolo');
        const img = document.getElementById('form-img');
        person(nome, cognome,ruolo,img);
    }
    for (let i = 0; i < team.length; i++) {
        const element = team[i];
        element.card();
    }
    let btnNewPerson = document.getElementById("newPerson");
    btnNewPerson.addEventListener("click", newPerson);
}

print();