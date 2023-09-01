// Import stylesheets
import './style.css'

// Write Javascript code!
const appDiv = document.getElementById('app')
appDiv.innerHTML = `<h1>JS Starter</h1>`

// console.log to HTML:
// (aus: https://stackoverflow.com/questions/20256760/javascript-console-log-to-html)
;(function () {
  var old = console.log
  var logger = document.getElementById('log')
  console.log = function () {
    for (var i = 0; i < arguments.length; i++) {
      if (typeof arguments[i] == 'object') {
        logger.innerHTML +=
          (JSON && JSON.stringify
            ? JSON.stringify(arguments[i], undefined, 2)
            : arguments[i]) + '<br />'
      } else {
        logger.innerHTML += arguments[i] + '<br />'
      }
    }
  }
})()

let octopus = { name: 'bob' }
octopus.nachname = 'Günter'

console.log(octopus)
// meine Annahme ist korrekt, es können einfach random Attribute zu Objekten hinzugefügt werden

delete octopus.name
console.log(octopus)
// sowie diese auch komplett wieder entfernt werden

class Affe {
  schrei() {
    console.log('Uu Aa')
  }
}
class Löwe {
  schrei() {
    console.log('Rawr')
  }
}
let monke = new Affe()
monke.schrei()
let affenLöwe = monke
affenLöwe.schrei()
