import rarible from '../Assets/Images/rarible.png';
import openSea from '../Assets/Images/Logomark-Blue.png';
import cgtrader from '../Assets/Images/cgtrader-300x300.png';
import { publish } from '../Types/UtilFunctionTypes';

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

const hasInvalidChars = (str: string) => {
  const strArr = str.split('');

  for (const char of strArr) {
    if (INVALID_CHARS.includes(char)) {
      return true;
    }
  }

  return false;
};

export const getPublishDetails = (publishedOn: publish) => {
  let publishDetails: {
    image: string;
    buttonColor: string;
    textColor: string;
    buttonText: string;
  };

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
      image: '',
      buttonColor: '',
      textColor: '',
      buttonText: '',
    };
  }

  return publishDetails;
};

export const formatDate = (date: string) => {
  if (date !== '') {
    return new Date(date).toLocaleDateString('en-US', {
      month: 'long',
      year: 'numeric',
      day: '2-digit',
    });
  }

  return '';
};

export const validateName = (name: string) => {
  if (
    name.trim().length >= 2 &&
    name.trim().length <= 35 &&
    !hasInvalidChars(name)
  ) {
    return true;
  }

  return false;
};

export const validateEmail = (email: string) => {
  //eslint-disable-next-line
  const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  return regex.test(email);
};

const encodeText = (text: string) => {
  //max size will be 600 characters
  let encodedText = '';

  text.split('').forEach((char) => {
    let encodedChar = '';

    switch (char) {
      case '<':
        encodedChar = '&lt;';
        break;
      case '>':
        encodedChar = '&gt;';
        break;

      case '&':
        encodedChar = '&amp;';
        break;

      case '"':
        encodedChar = '&quot;';
        break;

      case "'":
        encodedChar = '&apos;';
        break;

      case '£':
        encodedChar = '&pound;';
        break;

      case '€':
        encodedChar = '&euro;';
        break;

      case '%':
        encodedChar = '&percnt;';
        break;

      case '(':
        encodedChar = '&lpar;';
        break;

      case ')':
        encodedChar = '&rpar;';
        break;

      case '{':
        encodedChar = '&lbrace;';
        break;

      case '}':
        encodedChar = '&rbrace;';
        break;

      case '@':
        encodedChar = '&commat;';
        break;

      case '$':
        encodedChar = '&dollar;';
        break;

      case '?':
        encodedChar = '&quest;';
        break;

      case '=':
        encodedChar = '&equals;';
        break;

      case '/':
        encodedChar = '&sol;';
        break;

      case ',':
        encodedChar = '&comma;';
        break;

      case '.':
        encodedChar = '&period;';
        break;

      case '!':
        encodedChar = '&excl;';
        break;

      case '[':
        encodedChar = '&lbrack;';
        break;

      case ']':
        encodedChar = '&rbrack;';
        break;

      default:
        encodedChar = char;
    }

    encodedText += encodedChar;
  });

  return encodedText;
};

export const validateMessage = (message: string) => {
  if (message.trim().length > 4 && message.trim().length <= 600) {
    const encodedMessage = encodeText(message);

    return { isValid: true, message: encodedMessage };
  }

  return { isValid: false, message: '' };
};
