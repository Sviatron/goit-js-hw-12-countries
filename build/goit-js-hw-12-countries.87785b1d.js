document.querySelector("#country-input").addEventListener("input",e=>{var t;(t=e.target.value,fetch(`https://restcountries.com/v2/name/${t}`).then(e=>e.json())).then(e=>console.log(e))});
//# sourceMappingURL=goit-js-hw-12-countries.87785b1d.js.map
