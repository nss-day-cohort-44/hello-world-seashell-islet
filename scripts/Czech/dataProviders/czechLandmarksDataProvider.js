
const landmarksArray = [
    {
        name: "Powder Tower"
    },
    {
        name: "Lednice Castle"
    },
    {
        name: "Sumava Mountains"
    },
    {
        name: "Holy Trinity Column"
    },
    {
        name: "Bohemian Paradise Park"
    }
]

export const useLandmarks = () => {
    return landmarksArray.slice()
}