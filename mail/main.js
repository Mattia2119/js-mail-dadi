const mailRegistrate = 
["Mattia.errol@gmail.com",
"Giulia.errol@gmail.com",
"Topolino.errol@gmail.com"];

const button = document.getElementById("button");

button.addEventListener("click",
    
    function() {
        const mail = document.getElementById("mail").value;

        let registrata = false;

        for (let i = 0; i<mailRegistrate.length; i++) {

            if (mail == mailRegistrate[i]) {

                registrata = true;
            }
        }

        if (registrata == true) {
          alert("La tua mail risulta registrata!");

        } else {
            alert("La tua mail non risulta registrata!");
        }
    }

);








