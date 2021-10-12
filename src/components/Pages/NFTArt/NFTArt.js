import React from 'react';
import classes from './NFTArt.module.css';
import Heading from '../../UI/Heading/Heading';
import PresentationSection from '../../UI/PresentationSection/PresentationSection';
import ItemCard from '../../UI/ItemCard/ItemCard';

const NFTArtItems = [
  {
    id: '000001',
    title: 'Ferrari F375',
    description:
      "A Classic Ferrari Formula Car 3D Model 32K UHD Image. Ferrari achieved the 4.5-litre goal of the formula with the 375 F1, two of which debuted at Monza on September 3, 1950. This 4.5-litre (4493.73 cc/274 in³) engine produced roughly the same power as its 4.1-litre predecessor, but its tractability earned Ascari second place in that debut race. A series of modifications through the 1951 season allowed Ferrari to finally put Alfa Romeo behind it in a Formula One race, with José Froilán González' victory at Silverstone on July 14 becoming the constructor's first World Championship win. Ascari's wins at the Nürburgring and Monza and strong finishes throughout the season cemented the company's position as a Formula One contender.",
    link: 'https://rarible.com/token/0x60f80121c31a0d46b5279700f9df786054aa5ee5:1379364?tab=details',
    thumbnail:
      'https://img1.cgtrader.com/items/3186025/708b0505a0/ferrari-375-f1-3d-model-obj-fbx-blend-dae.jpg',
    images: [],
    likes: [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    ],
    comments: [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
      1, 1, 1,
    ],
    publishedOn: 'rarible',
  },
  {
    id: '000002',
    title: 'Santa Maria',
    description:
      'La Santa María (The Saint Mary), alternatively La Gallega, was the largest of the three Spanish ships used by Christopher Columbus in his first voyage across the Atlantic Ocean in 1492. This is the 3D Replica Model Image of the Santa Maria. 32K UHD Image',
    link: '',
    thumbnail:
      'https://media.cgtrader.com/variants/jsjyKHBrhFh72uShFS6dvaRR/40073f86dea5cc27b3e46b911284f10ff35833da74046da55f55f229c8993de7/Image6.png',
    images: [],
    likes: [],
    comments: [],
    publishedOn: 'opensea',
  },
  {
    id: '000003',
    title: 'Funny Frog Holiday',
    description:
      'The Funny Frog inspired from Crazy Frog. Funny Frog in holiday 3D Model Image, 32K UHD',
    link: '',
    thumbnail:
      'https://img1.cgtrader.com/items/640852/4a81113773/funny-frog-3d-model-low-poly-rigged-obj-fbx-blend-mtl.png',
    images: [],
    likes: [],
    comments: [],
    publishedOn: 'cgtrader',
  },
  {
    id: '000004',
    title: 'Funny Frog Business',
    description:
      'The Funny Frog inspired from Crazy Frog. Funny Frog in Business Meeting 3D Model Image, 32K UHD',
    link: '',
    thumbnail:
      'https://img1.cgtrader.com/items/640852/4469d95405/funny-frog-3d-model-low-poly-rigged-obj-fbx-blend-mtl.png',
    images: [],
    likes: [],
    comments: [],
    publishedOn: '',
  },
  {
    id: '000005',
    title: 'Funny Frog Drinking',
    description:
      'The Funny Frog inspired from Crazy Frog. Funny Frog is Drinking 3D Model Image, 32K UHD',
    link: '',
    thumbnail: '',
    images: [],
    likes: [],
    comments: [],
    publishedOn: '',
  },
  {
    id: '000006',
    title: 'Funny Frog in Love',
    description:
      'The Funny Frog inspired from Crazy Frog. Funny Frog is in love 3D Model Image, 32K UHD',
    link: '',
    thumbnail: '',
    images: [],
    likes: [],
    comments: [],
    publishedOn: '',
  },
  {
    id: '000007',
    title: 'Funny Frog in Hunting',
    description:
      'The Funny Frog inspired from Crazy Frog. Funny Frog is in love 3D Model Image, 32K UHD',
    link: '',
    thumbnail: '',
    images: [],
    likes: [],
    comments: [],
    publishedOn: '',
  },
  {
    id: '000008',
    title: 'Funny Frog in Paris',
    description:
      'The Funny Frog inspired from Crazy Frog. Funny Frog is in love 3D Model Image, 32K UHD',
    link: '',
    thumbnail: '',
    images: [],
    likes: [],
    comments: [],
    publishedOn: '',
  },
];

const NFTArt = () => {
  console.log('NFT Art Page is running...');

  return (
    <div className={classes.NFTArtContainer}>
      <Heading title='NFT Art' />
      <p>
        You can bid on these art products in{' '}
        <a
          href='https://rarible.com/aytacguley'
          target='_blank'
          rel='noopener noreferrer'
        >
          rarible.com
        </a>
      </p>
      <PresentationSection>
        {NFTArtItems.map((item) => (
          <ItemCard {...item} key={item.id} />
        ))}
      </PresentationSection>
    </div>
  );
};

export default NFTArt;
