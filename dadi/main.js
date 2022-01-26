const utente = Math.floor(Math.random() * 6) + 1;
alert ("Il tuo dado vale: " + utente);

const cpu = Math.floor(Math.random() * 6) + 1;
alert ("Il dado della cpu vale: " + cpu);


if(utente> cpu) {
    alert("hai vinto!");
}

else if (cpu> utente) {
    alert ("hai perso!");
}

else {
    alert("Pareggio!");
}