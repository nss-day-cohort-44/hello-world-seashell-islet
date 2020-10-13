
import {  List  } from 'scripts/List.js';
import {  useCities  } from './cities/citiesDataProvider.js';
import {  useLandmarks  } from './landmarks/landmarksDataProvider.js';
import {  useCelebrities  } from './celebrities/celebritiesDataProvider.js';


export const HTMLRep = () => {


    const cities = useCities()
    const landmarks = useLandmarks()
    const celebrities = useCelebrities()

    const objectsToHTML = (list, string) => {
        for (const item of list) {
            string += List(item)
        }
        return string
    }

    const citiesPlugin = objectsToHTML(cities, "")
    const landmarksPlugin = objectsToHTML(landmarks, "")
    const celebritiesPlugin = objectsToHTML(celebrities, "")

    const cityElement = document.querySelector(".cityList")
    const landmarkElement = document.querySelector(".landmarkList")
    const celebrityElement = document.querySelector(".celebrityList")

    cityElement.innerHTML += citiesPlugin
    landmarkElement.innerHTML += landmarksPlugin
    celebrityElement.innerHTML += celebritiesPlugin

}


