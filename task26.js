let countries = ["Azerbaijan", "Albania", "Germany", "America", "Russian"];
let new_array = [];

for (let i = 0; i < countries.length; i++) {
    let country = countries[i];

    if (country.charAt(0).toLowerCase() === 'a' && country.charAt(country.length - 1).toLowerCase() === 'a') {
        new_array.push(country);
    }
}

console.log(new_array);