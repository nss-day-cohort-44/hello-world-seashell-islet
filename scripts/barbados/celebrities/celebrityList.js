import {celebrities} from "./celebrities.js"

import {useCelebrityCollection} from "./celebritiesDataProvider.js"

export const barbadosCelebrities = () => {
    const contentElement = document.querySelector("#citizens")
    const famousCitizens = useCelebrityCollection()
let barbadosCitizenHTML = ""
for (const celeb of famousCitizens ) {
    barbadosCitizenHTML += celebrities(celeb)
}
contentElement.innerHTML += `
<h3 style=color:blue;font-size:20px>Famous People</h3>
${barbadosCitizenHTML}
`
}

