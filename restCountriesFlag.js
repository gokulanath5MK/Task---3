const XMLHttpRequest = require('xhr2');
const xhr = new XMLHttpRequest();

xhr.open('GET', 'https://restcountries.com/v3.1/all');
xhr.onload = function() {
    if (xhr.status === 200) {
        const data = JSON.parse(xhr.responseText);
        data.forEach(countryData => {
            const flags = countryData.flags;
            if (flags) {
                console.log(flags.png);
            }
        });
    } else {
        console.error('Request failed with status:', xhr.status);
    }
};

xhr.send();

