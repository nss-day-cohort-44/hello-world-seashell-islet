import {landmarks} from "./landmarks.js"

import {useLandmarks} from "./landmarksDataProvider.js"

export const barbadosLandmarks = () => {
    const contentElement = document.querySelector("#landmarks")
    const famousLandmarks = useLandmarks()
let barbadosLandmarksHTML = ""
for (const Landmarks of famousLandmarks ) {
    barbadosLandmarksHTML += landmarks(Landmarks)
}
contentElement.innerHTML += `
<h3 style=color:blue;font-size:20px >Landmarks</h3>
${barbadosLandmarksHTML}
`
}

