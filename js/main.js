//const emails = ["franca@gmail.it", "franco@gmail.it", "franchino@gmail.it", "franchina@gmail.it"];
//const accediButton = document.getElementById("btn-accedi")


//accediButton.addEventListener("click", function () {
   // const mailInserita = document.getElementById("email").value

    //for (let i = 0; i < emails.length; i++) {
       // const mailTraCuiCercare = emails[i];

      //  if (mailTraCuiCercare === mailInserita) {
          //  document.getElementById("accesso").innerHTML = "Accesso consentito";
      //  } else {
     //       document.getElementById("accesso").innerHTML = "Accesso negato. Registrati subito!";
   //     }
 //   }
//});



const emails = ["franca@gmail.it", "franco@gmail.it", "franchino@gmail.it", "franchina@gmail.it"];
const accediButton = document.getElementById("btn-accedi")
let accessoConsentito = false;

accediButton.addEventListener("click", function () {
    const mailInserita = document.getElementById("email").value
    

    for (let i = 0; i < emails.length; i++) {
        const mailTraCuiCercare = emails[i];
        

        if (mailTraCuiCercare === mailInserita) {
            accessoConsentito = true;
        }
    }
    if (accessoConsentito === true) {
        document.getElementById("accesso").innerHTML = "Accesso consentito";
    } else {
        document.getElementById("accesso").innerHTML = "Accesso negato. Registrati subito!";
    }
});



``

//////////////////////////////////
let computer = Math.round(Math.random() * 6) + 1;
const utente = Math.round(Math.random() * 6) + 1;
const lanciaButton = document.getElementById("lancia-bnt")


lanciaButton.addEventListener("click", function () {
    document.getElementById("utente").innerHTML = utente;
    if (computer > utente) {
        document.getElementById("risultato").innerHTML = "Uffa, hai perso!"
    } else if (computer < utente) {
        document.getElementById("risultato").innerHTML = "Congratulazioni! HAI VINTO!"
    } else if (computer == utente) {
        document.getElementById("risultato").innerHTML = "Siete pari, tira di nuovo il dado!"
    }
})