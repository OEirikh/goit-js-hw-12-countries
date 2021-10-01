export default fetchCountries;

function fetchCountries(searchQuery) {
  const url = `https://restcountries.com/v2/name/${searchQuery}`;
  return fetch(url).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}
