//funktioniert nicht, werde eine neue Version über das Wochenende hochladen! 


var firstName = <HTMLInputElement>document.getElementById("firstName");
var lastName = <HTMLInputElement>document.getElementById("lastName");
var email = <HTMLInputElement>document.getElementById("email");
var mediaChannelSelect = <HTMLInputElement>document.getElementById("mediaChannelSelect");


function btnOnclick(){
    var button = <HTMLInputElement>document.getElementById("sub");

    button.addEventListener("submit", (e:Event) => validate());



}

function validate(){
    if(firstName == null){
        alert("First Name is mandatory"); 
    }

    if(lastName == null){
        alert("Last Name is mandatory"); 
    }

    if(email == null){
        alert("First Name is mandatory"); 
    }

}



