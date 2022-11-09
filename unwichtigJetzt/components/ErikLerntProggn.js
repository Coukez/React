/*
 * GitHub commands
 */

git add . // alles adden
git commit // message schreiben für den commit
git push origin main // den commit auf main pushen
git pull origin main // änderungen die im repo sind, aber nicht bei dir, ziehen
git checkout . // alles zurücksetzen
git status // gucken was sache ist, most used command



console.log("hello")

// Function, returns number
const add = (a, b) => a + b;

// Add 2 numbers
const sum1 = add(3, 3)
const sum2 = add(add(1, 2), 3)

/*
 * Arrays / Lists
 */

const myList = [0, 1, 2, 3]
myList[0] = "Fertig" // ["Fertig", 1,2,3]

// Arrays with Strings
const myNameList = ["Erik", "Dominik", "Laurin", "Huso"]

// Get first entry, but change it inbetween
const erstNameAusDerListeVorher = myNameList[0] // "Erik"
myNameList[0] = "NichtMehrErik" // ["Fertig", 1,2,3]
const erstNameAusDerListeNachher = myNameList[0] // "NichtMehrErik"

console.log(myNameList[0]) // das selbe wie...
console.log(erstNameAusDerListeNachher)

// Get first and second entry, 2 methods to do so
// Methode 1: Get by array index
const erstes = myNameList[0]
const zweites = myNameList[1]
console.log("Hey wir haben das erste: " + erstes + " und auch das zweite: " + zweites)

// Methode 2: Destructure
const [erstes, zweites] = myNameList
console.log("Hey wir haben das erste: " + erstes + " und auch das zweite: " + zweites)

/*
 * useState
 */

const useState = (defaultValue) => {
    let currentValue = defaultValue;

    const setCurrentValue = (value) => {
        currentValue = value
    }

    return [currentValue, setCurrentValue]
}

// How to use in React
const [activeTab, setActiveTab] = useState(0)

// Click auf button der Tab 2 öffnen soll ...
const switchToTab2 = () => setActiveTab(2)
const meineTotalUnnuetzeVariable = "Navigate to tab 2"

    // Im HTML dann so ..
    < Button onClick = { switchToTab2 } name = { meineTotalUnnuetzeVariable } />
        // .. ist gleichwertig mit ..
        <Button onClick={() => setActiveTab(2)} name={"Navigate to tab 2"} />

/*
 * Aufgaben
 */

// letzte item von array2 soll dem letzten von array1 gleichen.
// erste item von array1 soll dem ersten von array2 gleichen.
const array1 = ["erik", "b", "sepp"] // array.length
const array2 = [........ ]

array2[array2.length - 1] = array1[array1.length - 1]
array1[0] = array2[0]