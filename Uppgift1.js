//en funktion för att skapa ett Person objekt
function Person(name, email, phone, street, zip,city){
    //egenskaper
    this.name = name;
    this.email = email;
    this.phone = phone;
    //objektet adress
    this.adress = {
        street: street,
        zip: zip,
        city:city,
    }

    //metoden print som skriver ut namnet och adressen
    this.print = function(){
        console.log(
        this.name + "\n" + "\n" +
        this.adress.street + "\n" +  
        this.adress.zip + " "  + this.adress.city);
    }
    }   

//skapar 2 objekt med en konstruktor
let sara = new Person("Sara Svensson", "schsvens@gmail.com", "0723125685", "Hanstavägen 51", "16453", "Kista");
let jonas = new Person("Jonas Holmer", "Jonas.holmer@gmail.com", "0705653183", "Stagneliusvägen 23", "12567", "Stockholm");

//kallar på metoden
sara.print();
jonas.print();