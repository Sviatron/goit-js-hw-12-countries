import fetchCountries from "./fetchCountries";

const input = document.querySelector("#country-input");

input.addEventListener("input", (event) => {
  const searchQuery = event.target.value;

  fetchCountries(searchQuery).then((countries) => console.log(countries));
});
