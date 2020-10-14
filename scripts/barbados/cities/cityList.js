import {cities} from "./cities.js"

import {usecityCollection} from "./citiesDataProvider.js"

export const barbadosCities = () => {

    // stores the targeted HTML id and stores it in a variable.
    const contentElement = document.querySelector("#cities")

    // stores the imported function into a variable
    const famousCities = usecityCollection()

    // declares a variable that converts its contents into a string
let barbadosCityHTML = ""

    // runs a loop that converts objects in an array  to HTML and stores in the above variable 
for (const city of famousCities ) {
    barbadosCityHTML += cities(city)
}

    // writes the loaded variable and  the HTML <h3> into the targeted HTML id
contentElement.innerHTML += `
<h3 style=color:blue;font-size:20px >Cities</h3>
${barbadosCityHTML}
`
}

