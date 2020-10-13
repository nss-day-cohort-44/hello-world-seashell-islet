const cities = [ 
    {
        title: "Cities I'd like to visit",
        city1: "Banjul",
        city2: "Basse Santu Su",
        city3: "Janjanbureh",
        city4: "Kololi",
        city5: "Soma"
    },

]

export useCities = () => {
    return cities.slice()
};