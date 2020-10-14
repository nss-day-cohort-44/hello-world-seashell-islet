import {landmarks} from "./landmarks.js"

import {useLandmarks} from "./landmarksDataProvider.js"


export const barbadosLandmarks = () => {

    // stores the targeted HTML id and stores it in a variable.
    const contentElement = document.querySelector("#landmarks")

    // stores the imported function into a variable
    const famousLandmarks = useLandmarks()

    // declares a variable that converts its contents into a string
let barbadosLandmarksHTML = ""

    // runs a loop that converts objects in an array  to HTML and stores in the above variable 
for (const Landmarks of famousLandmarks ) {
    barbadosLandmarksHTML += landmarks(Landmarks)
}

    // writes the loaded variable and  the HTML <h3> into the targeted HTML id
contentElement.innerHTML += `
<h3 style=color:blue;font-size:20px >Landmarks</h3>
${barbadosLandmarksHTML}
`
}

