import { List } from "../List.js"
import { useCelebs } from "./dataProviders/czechCelebsDataProvider.js"
import { useCities } from "./dataProviders/czechCitiesDataProvider.js"
import { useLandmarks } from "./dataProviders/czechLandmarksDataProvider.js"

export const czechList = () => {

    // stores all imported functions in variables.
    const cities = useCities()
    const celebrities = useCelebs()
    const landmarks = useLandmarks()

    // provides a function that stores the objects from arrays into a string.
    const htmlMaker = (countryItem, htmlRep) => {
        for (const item of countryItem) {
            htmlRep += List(item)
        }
        return htmlRep
    }

    // runs the above function and stores the strings into respective variables
    const citiesHTML = htmlMaker(cities, "")
    const celebritiesHTML = htmlMaker(celebrities, "")
    const landmarksHTML = htmlMaker(landmarks, "")

    // stores the target HTML elements into respective variables
    const cityList = document.querySelector(".city")
    const celebrityList = document.querySelector(".citizen")
    const landmarkList = document.querySelector(".landmark")

     // writes the strings converted from objects into the HTML document.
    cityList.innerHTML += citiesHTML
    landmarkList.innerHTML += landmarksHTML
    celebrityList.innerHTML += celebritiesHTML

}