import fetchCountries from './fetchCountries';
import debounce from 'lodash.debounce';

import { info, success, error } from '@pnotify/core';
import '@pnotify/core/dist/BrightTheme.css';
import '@pnotify/core/dist/PNotify.css';

import item from '../templates/item.hbs';
import oneCountryCard from '../templates/oneCountryCard.hbs';

const input = document.querySelector('.input');
const list = document.querySelector('.search_results');

input.addEventListener('input', debounce(onInput, 500));

function onInput(e) {
  let inputValue = e.target.value;
  if (inputValue === '') {
    list.innerHTML = '';
    return;
  }
  fetchCountries(inputValue).then(xxx);
}

function xxx(data) {
  if (data.length > 10) {
    error({
      title: 'Yps!',
      text: 'Please enter more symbols',
      delay: 600,
    });
    list.innerHTML = '';
  }
  if (data.length >= 2 && data.length <= 10) {
    console.log(item(data));
    list.innerHTML = item(data);
    info({
      title: 'Almost',
      text: `We found ${data.length} countries`,
      delay: 600,
    });
  }
  if (data.length === 1) {
    console.log(data);
    list.innerHTML = oneCountryCard(data);
    success({
      title: 'Congrats',
      text: `We found ${data[0].name} country`,
      delay: 600,
    });
  }
}
