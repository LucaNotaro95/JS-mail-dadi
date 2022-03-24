let mail = ["anna@gmail.com", "pietro@gmail.com", "anna@gmail.com", "fabio@gmail.com"];

let mail2 = [];

do {

    var a = 1;




    let verifica = prompt("Inserisci la tua  ");



    for (let i = 0; i < mail.length; i++) {
        if (mail[i] == verifica) {
            console.log("entrato nel database");
        }

        else {


            mail2.push(1);
        }
    }


    if (mail.length == mail2.length) {

        console.log("riprova");
        a = 0;
    }

}
while (a == 0);
