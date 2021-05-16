export const monthList = [
    "January", "February", "March", "April",
    "May", "June", "July", "August",
    "September", "October", "November", "December"
]

export const setPositiveNumber = (value, handler) => {
    const numbers = [...Array(9999).keys()]
    if (numbers.includes(Number(value))) {
        handler(value)
    }
}
