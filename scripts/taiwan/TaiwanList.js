import { List } from "../List.js"
import { getCelebrities } from "./celebrities/CelebDataProvider.js"
import { getCities } from "./cities/CityDataProvider.js"
import { getLandmarks } from "./landmarks/LandmarkDataProvider.js"

export const TaiwanList = () => {

    const cities = getCities()
    const celebrities = getCelebrities()
    const landmarks = getLandmarks()

    const htmlMaker = (countryItem, htmlRep) => {
        for (const item of countryItem) {
            htmlRep += List(item)
        }
        return htmlRep
    }

    const citiesHTML = htmlMaker(cities, "")
    const celebritiesHTML = htmlMaker(celebrities, "")
    const landmarksHTML = htmlMaker(landmarks, "")

    const cityList = document.querySelector(".city-list")
    const celebrityList = document.querySelector(".celebrity-list")
    const landmarkList = document.querySelector(".landmark-list")

    cityList.innerHTML += citiesHTML
    landmarkList.innerHTML += landmarksHTML
    celebrityList.innerHTML += celebritiesHTML

}