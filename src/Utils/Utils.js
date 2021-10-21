import rarible from '../Assets/Images/rarible.png';
import openSea from '../Assets/Images/Logomark-Blue.png';
import cgtrader from '../Assets/Images/cgtrader-300x300.png';

const INVALID_CHARS = [
  '&',
  '<',
  '>',
  '$',
  '{',
  '}',
  '@',
  '?',
  '\\',
  '%',
  '#',
  '€',
  '£',
  '-',
  ':',
  ';',
  '|',
  '+',
  '(',
  ')',
  '=',
  '!',
  '*',
  '"',
  "'",
  '~',
  'ß',
  '[',
  ']',
];

const hasInvalidChars = (str) => {
  const strArr = str.split('');

  for (const char of strArr) {
    if (INVALID_CHARS.includes(char)) {
      return true;
    }
  }

  return false;
};

export const getPublishDetails = (publishedOn) => {
  let publishDetails;

  if (publishedOn.toLowerCase() === 'rarible') {
    publishDetails = {
      image: rarible,
      buttonColor: '#FEDA03',
      textColor: '#000',
      buttonText: 'Bid in Rarible',
    };
  } else if (publishedOn.toLowerCase() === 'opensea') {
    publishDetails = {
      image: openSea,
      buttonColor: '#2081E2',
      textColor: '#fff',
      buttonText: 'Bid in Opensea',
    };
  } else if (publishedOn.toLowerCase() === 'cgtrader') {
    publishDetails = {
      image: cgtrader,
      buttonColor: '#41A48F',
      textColor: '#fff',
      buttonText: 'Buy in Cgtrader',
    };
  } else {
    publishDetails = {
      image: null,
      buttonColor: null,
      textColor: null,
      buttonText: null,
    };
  }

  return publishDetails;
};

export const formatDate = (date) => {
  return new Date(date).toLocaleDateString('en-US', {
    month: 'long',
    year: 'numeric',
    day: '2-digit',
  });
};

export const validateName = (name) => {
  if (
    name.trim().length >= 2 &&
    name.trim().length <= 35 &&
    !hasInvalidChars(name)
  ) {
    return true;
  }

  return false;
};

export const validateEmail = (email) => {
  //eslint-disable-next-line
  const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  return regex.test(email);
};
