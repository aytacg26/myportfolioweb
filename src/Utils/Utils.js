import rarible from '../Assets/Images/rarible.png';
import openSea from '../Assets/Images/Logomark-Blue.png';
import cgtrader from '../Assets/Images/cgtrader-300x300.png';

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
