
import {  List  } from '../List.js';
import {  useCities  } from './cities/citiesDataProvider.js';
import {  useLandmarks  } from './landmarks/landmarksDataProvider.js';
import {  useCelebrities  } from './celebrities/celebritiesDataProvider.js';


export const HTMLRep = () => {

    // stores all imported functions in variables.
    const cities = useCities()
    const landmarks = useLandmarks()
    const celebrities = useCelebrities()

    // provides a function that stores the objects from arrays into a string.
    const objectsToHTML = (list, string) => {
        for (const item of list) {
            string += List(item)
        }
        return string
    }

    // runs the above function and stores the strings into respective variables
    const citiesPlugin = objectsToHTML(cities, "")
    const landmarksPlugin = objectsToHTML(landmarks, "")
    const celebritiesPlugin = objectsToHTML(celebrities, "")

    // stores the target HTML elements into respective variables
    const cityElement = document.querySelector(".cityList")
    const landmarkElement = document.querySelector(".landmarkList")
    const celebrityElement = document.querySelector(".celebrityList")

    // writes the strings converted from objects into the HTML document.
    cityElement.innerHTML += citiesPlugin
    landmarkElement.innerHTML += landmarksPlugin
    celebrityElement.innerHTML += celebritiesPlugin

}


