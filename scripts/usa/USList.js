import { List } from "../List.js"
import { useCelebrityCollection } from "./celebrities/celebritiesDataProvider.js"
import { usecityCollection } from "./cities/citiesDataProvider.js"
import { useLandmarks } from "./landmarks/landmarksDataProvider.js"

export const USList = () => {

    const cities = usecityCollection()
    const celebrities = useCelebrityCollection()
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

    const cityList = document.querySelector(".city-list")
    const celebrityList = document.querySelector(".celebrity-list")
    const landmarkList = document.querySelector(".landmark-list")

    cityList.innerHTML += citiesHTML
    landmarkList.innerHTML += landmarksHTML
    celebrityList.innerHTML += celebritiesHTML

}