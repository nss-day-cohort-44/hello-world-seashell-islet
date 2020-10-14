
// extracts the 'name' property of objects and convertes it to an HTML list item.
export const List = (listItem) => {
    return  `
            <li>${listItem.name}</li>
    `
}