
// en funktion som heter sphear som tar emot en parameter rad som står för radie
function sphear (rad) {
    //räknar ut sfärens area med hjälp av radien och lagrar det i variabeln ar
    let ar = 4 * Math.PI * (rad * rad);

    //jag räknar ut sfärens volym och lagar värdet i variabeln vol
    let vol = 4 * Math.PI * (rad* rad * rad)/3;
    
    //skriver ut svaret till konsollen
    console.log("arean är " + ar);
    console.log("volymen är " + vol);
    //returnerar ar & vol
    return ar, vol;
}
//anropar funktionen samt matar in vilken radie jag har på den sfär jag vill att programmet räknar ut och arean och volymen för
sphear(8);