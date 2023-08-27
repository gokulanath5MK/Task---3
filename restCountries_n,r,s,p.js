const XMLHttpRequest = require('xhr2');
const xhr = new XMLHttpRequest();

xhr.open('GET', 'https://restcountries.com/v3.1/all');
xhr.onload = function() {
    if (xhr.status === 200) {
        const data = JSON.parse(xhr.responseText);
        data.forEach(countryData => {
            const name = countryData.name.common;
            const region = countryData.region;
            const subregion = countryData.subregion;
            const population = countryData.population;

            console.log('Name:', name);
            console.log('Region:', region);
            console.log('Sub-region:', subregion);
            console.log('Population:', population);
            console.log('-------------------');
        });
    } else {
        console.error('Request failed with status:', xhr.status);
    }
};

xhr.send();
