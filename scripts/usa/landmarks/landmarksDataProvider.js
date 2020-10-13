const landmarksCollection = [
    
    { name:"Grand Canyon"},
    { name: "Yellowstone National Park"},
    { name: "Disney World"},
    { name: "Statue of Liberty"},
    { name: "Empire State Building"}
    
]
export const useLandmarks = () => {
    return landmarksCollection.slice()
}

