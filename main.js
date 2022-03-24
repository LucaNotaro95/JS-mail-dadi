let mail = ["anna@gmail.com", "pietro@gmail.com", "matteo@gmail.com", "fabio@gmail.com"];

let mail2 = [];
var a = 1;
while(a==1)
{

    




    let verifica = prompt ("Inserisci la tua mail");



    for (let i = 0; i < mail.length; i++) {
        if (mail[i] == verifica) {
            console.log("entrato nel database");
          a=0;
        }

        else {


            mail2.push(1);
        }
    }


    if (mail.length == mail2.length) {

        console.log("riprova");
        a = 1;
        
    }

}
console.log(a);
