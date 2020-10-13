
const citiesArray = [
    {
        name: "Prague"
    },
    {
        name: "Brno"
    },
    {
        name: "Ostrava"
    },
    {
        name: "Plzen"
    },
    {
        name: "Liberec"
    },
]

export const useCities = () => {
    return citiesArray.slice()
}