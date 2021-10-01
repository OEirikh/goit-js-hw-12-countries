import fetchCountries from './fetchCountries';
import debounce from 'lodash.debounce';
import { infoNotification, successNotification, errorNotification } from '../js/notification';
import countryListItem from '../templates/countryListItem.hbs';
import oneCountryCard from '../templates/oneCountryCard.hbs';
import refs from './refs.js';

refs.input.addEventListener('input', debounce(onInput, 500));

function onInput(e) {
  let inputValue = e.target.value;
  if (inputValue === '') {
    updateHTML('');
    return;
  }
  fetchCountries(inputValue).then(searchResults);
}

function searchResults(data) {
  if (data.length > 10) {
    updateHTML('');
    errorNotification();
  }
  if (data.length >= 2 && data.length <= 10) {
    updateHTML(countryListItem(data));
    infoNotification(data);
  }
  if (data.length === 1) {
    updateHTML(oneCountryCard(data));
    successNotification(data);
  }
}

const updateHTML = markup => {
  refs.list.innerHTML = markup;
};
