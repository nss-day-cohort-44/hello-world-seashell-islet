const cities = [ 
    { name: "Banjul" },
    { name: "Basse Santu Su" },
    { name: "Janjanbureh" },
    { name: "Kololi" },
    { name: "Soma" }

]

export useCities = () => {
    return cities.slice()
};