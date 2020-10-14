import {cities} from "./cities.js"

import {usecityCollection} from "./citiesDataProvider.js"

export const barbadosCities = () => {
    const contentElement = document.querySelector("#cities")
    const famousCities = usecityCollection()
let barbadosCityHTML = ""
for (const city of famousCities ) {
    barbadosCityHTML += cities(city)
}
contentElement.innerHTML += `
<h3 style=color:blue;font-size:20px >Cities</h3>
${barbadosCityHTML}
`
}

