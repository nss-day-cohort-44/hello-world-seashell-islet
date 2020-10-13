import { City } from "./City.js"
import { getCities } from "./CityDataProvider.js"

export const cityList = () => {
    const content = document.querySelector(".city-list")
    
    const cities = getCities()

    let htmlRep = ""

    htmlRep += City(cities)

}