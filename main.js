const getData = document.querySelector('#get-info');
const countryInfo = document.querySelector('#country-info');
countryInfo.innerHTML = '';

const buttonHandler = async () => {
    const countryName = document.querySelector('#country-name').value.trim();
    if(!countryName) {
        countryInfo.innerHTML = "Please enter a country name.";
        return;
    }

    try {
        const response = await fetch(`https://restcountries.com/v3.1/name/${countryName}`);
        const data = await response.json();

        if(!response.ok){
            countryInfo.innerHTML = 'Country not found';
            return;
        }
    
        const country = data[0];

        countryInfo.innerHTML = 
            `
            <br>
            <h3>Country: ${country.name.official} </h3>
            <p>Capital: ${country.capital} 🏛️</p>
            <p>Population: ${country.population} 👥</p>
            <p>Region: ${country.region} 🌍</p>
            <p>Flag: </p><img src=" ${country.flags.png}" ></img>`

    } catch (error) {
        countryInfo.innerHTML = 'Something went wrong... Try Again';
    }
}
getData.addEventListener('click', buttonHandler);

