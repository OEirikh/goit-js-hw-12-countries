import { info, success, error } from '@pnotify/core';
import '@pnotify/core/dist/BrightTheme.css';
import '@pnotify/core/dist/PNotify.css';

export const errorNotification = () => {
  error({
    title: 'Yps!',
    text: 'Please enter more symbols',
    delay: 500,
  });
};

export const infoNotification = data => {
  info({
    title: 'Almost',
    text: `We found ${data.length} countries`,
    delay: 500,
  });
};

export const successNotification = data => {
  success({
    title: 'Congrats',
    text: `We found ${data[0].name} country`,
    delay: 500,
  });
};
