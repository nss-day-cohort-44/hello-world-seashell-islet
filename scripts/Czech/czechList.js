import { List } from "../List.js"
import { useCelebs } from "./dataProviders/czechCelebsDataProvider.js"
import { useCities } from "./dataProviders/czechCitiesDataProvider.js"
import { useLandmarks } from "./dataProviders/czechLandmarksDataProvider.js"

export const czechList = () => {

    const cities = useCities()
    const celebrities = useCelebs()
    const landmarks = useLandmarks()

    const htmlMaker = (countryItem, htmlRep) => {
        for (const item of countryItem) {
            htmlRep += List(item)
        }
        return htmlRep
    }

    const citiesHTML = htmlMaker(cities, "")
    const celebritiesHTML = htmlMaker(celebrities, "")
    const landmarksHTML = htmlMaker(landmarks, "")

    const cityList = document.querySelector(".city")
    const celebrityList = document.querySelector(".citizens")
    const landmarkList = document.querySelector(".landmark")

    cityList.innerHTML += citiesHTML
    landmarkList.innerHTML += landmarksHTML
    celebrityList.innerHTML += celebritiesHTML

}