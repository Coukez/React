/*
Block: 
eingegrenzt durch '{}'

Variablen Updaten: 
var greeting = 'say hi'
greeting = 'hello'

Scope:
Wo die Variablen verfügbar zum Benutzen sind

Hoisting: 
to move the declaration of functions, variables or classes to the top of their scope
--> Egal wo Elemente Deklariert sind, sie werden "nach oben" im jeweiligen scope  




/*
Variablen
*/

let //Deklarieren auf Blockebene, updaten ist möglich, redeclaren nicht
// + Variablen gibt es nur im jeweiligen Block --> Egal ob man den Namen d. Variable schon iwo anders verwendet hat


let aufBlockEbeneDeklarieren 
// myLetVariable ist hier *nicht* sichtbar

for (let myLetVariable = 0; myLetVariable < 5; myLetVariable++) {
    // myLetVariable ist nur hier sichtbar
  }
  
  // myLetVariable ist hier *nicht* sichtbar
  

const //Wert nicht veränderbar, Blockebene Deklarieren, nicht updatable o. redeclarable, properties can be updated


const UpdateProperties#

const greeting = {
    message: "say Hi",
    times: 4
}
//property "message" Updaten:
greeting.message = "say Hello instead";


var // global bzw. function scoped, updatable & redeclarable, 



/*
Operatoren
*/

const zusammengesetzte Operatoren = '-=, +='
// -= und +=  -  zusammengesetzte Operatoren bzw.: x = x Operator y
//Beispiel: x += 3  -->  x = x + 3   ;   x-= 3  -->  x = x - 3 


