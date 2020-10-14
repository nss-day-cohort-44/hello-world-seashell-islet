import { List } from "../List.js"
import { getCelebrities } from "./celebrities/CelebDataProvider.js"
import { getCities } from "./cities/CityDataProvider.js"
import { getLandmarks } from "./landmarks/LandmarkDataProvider.js"

export const TaiwanList = () => {
    
    // stores all imported functions in variables.
    const cities = getCities()
    const celebrities = getCelebrities()
    const landmarks = getLandmarks()

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
    const cityList = document.querySelector(".city-list")
    const celebrityList = document.querySelector(".celebrity-list")
    const landmarkList = document.querySelector(".landmark-list")

    // writes the strings converted from objects into the HTML document.
    cityList.innerHTML += citiesHTML
    landmarkList.innerHTML += landmarksHTML
    celebrityList.innerHTML += celebritiesHTML

}