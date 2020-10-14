import {celebrities} from "./celebrities.js"

import {useCelebrityCollection} from "./celebritiesDataProvider.js"

export const barbadosCelebrities = () => {
    
    // stores the targeted HTML id and stores it in a variable.
    const contentElement = document.querySelector("#citizens")

    // stores the imported function into a variable
    const famousCitizens = useCelebrityCollection()

    // declares a variable that converts its contents into a string
let barbadosCitizenHTML = ""

    // runs a loop that converts objects in an array  to HTML and stores in the above variable 
for (const celeb of famousCitizens ) {
    barbadosCitizenHTML += celebrities(celeb)
}

     // writes the loaded variable and  the HTML <h3> into the targeted HTML id
contentElement.innerHTML += `
<h3 style=color:blue;font-size:20px>Famous People</h3>
${barbadosCitizenHTML}
`
}

