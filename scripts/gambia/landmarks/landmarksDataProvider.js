const landmarks = [ 
    {
        title: "Landmarks I'd like to visit",
        landmark1: "The Reptile Farm",
        landmark2: "Stone Circles of Senegambia",
        landmark3: "Jufureh",
        landmark4: "King Fahad Mosque",
        landmark5: "Fort James Island"
    },

]

export uselandmarks = () => {
    return landmarks.slice()
};