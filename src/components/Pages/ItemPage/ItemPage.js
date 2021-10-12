import { useParams, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import PresentationSection from '../../UI/PresentationSection/PresentationSection';
import Heading from '../../UI/Heading/Heading';
import ActionButtons from '../../UI/ActionButtons/ActionButtons';
import classes from './ItemPage.module.css';
import Carousel from '../../UI/Carousel/Carousel';

const itemDetails = {
  id: '000001',
  title: 'Ferrari F375',
  description:
    "A Classic Ferrari Formula Car 3D Model 32K UHD Image. A Classic Ferrari Formula Car 3D Model 32K UHD Image. Ferrari achieved the 4.5-litre goal of the formula with the 375 F1, two of which debuted at Monza on September 3, 1950. This 4.5-litre (4493.73 cc/274 in³) engine produced roughly the same power as its 4.1-litre predecessor, but its tractability earned Ascari second place in that debut race. A series of modifications through the 1951 season allowed Ferrari to finally put Alfa Romeo behind it in a Formula One race, with José Froilán González' victory at Silverstone on July 14 becoming the constructor's first World Championship win. Ascari's wins at the Nürburgring and Monza and strong finishes throughout the season cemented the company's position as a Formula One contender.",
  link: 'https://rarible.com/token/0x60f80121c31a0d46b5279700f9df786054aa5ee5:1379364?tab=details',
  thumbnail:
    'https://img1.cgtrader.com/items/3186025/708b0505a0/ferrari-375-f1-3d-model-obj-fbx-blend-dae.jpg',
  images: [
    {
      id: 'ferrari-image-0001',
      url: 'https://img1.cgtrader.com/items/3186025/708b0505a0/ferrari-375-f1-3d-model-obj-fbx-blend-dae.jpg',
    },
    {
      id: 'ferrari-image-0002',
      url: 'https://img-new.cgtrader.com/items/3186025/67dc39db11/ferrari-375-f1-3d-model-obj-fbx-blend-dae.jpg',
    },
    {
      id: 'ferrari-image-0003',
      url: 'https://img2.cgtrader.com/items/3186025/037431ab5b/ferrari-375-f1-3d-model-obj-fbx-blend-dae.jpg',
    },
    {
      id: 'ferrari-image-0004',
      url: 'https://img1.cgtrader.com/items/3186025/7d7c6114ac/ferrari-375-f1-3d-model-obj-fbx-blend-dae.jpg',
    },
    {
      id: 'ferrari-image-0005',
      url: 'https://img2.cgtrader.com/items/3186025/9b7412e020/ferrari-375-f1-3d-model-obj-fbx-blend-dae.jpg',
    },
    {
      id: 'ferrari-image-0006',
      url: 'https://img2.cgtrader.com/items/3186025/9b7412e020/ferrari-375-f1-3d-model-obj-fbx-blend-dae.jpg',
    },
    {
      id: 'ferrari-image-0007',
      url: 'https://img2.cgtrader.com/items/3186025/9b7412e020/ferrari-375-f1-3d-model-obj-fbx-blend-dae.jpg',
    },
    {
      id: 'ferrari-image-0008',
      url: 'https://img2.cgtrader.com/items/3186025/9b7412e020/ferrari-375-f1-3d-model-obj-fbx-blend-dae.jpg',
    },
    {
      id: 'ferrari-image-0009',
      url: 'https://img2.cgtrader.com/items/3186025/9b7412e020/ferrari-375-f1-3d-model-obj-fbx-blend-dae.jpg',
    },
  ],
  likes: [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
  ],
  comments: [
    {
      id: 'comment-001',
      comment:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tempus facilisis posuere. Aenean nibh dui, gravida id lectus quis, semper consectetur metus. Aenean consectetur, lectus et feugiat dapibus, lorem felis condimentum eros, sit amet euismod justo ipsum sit amet mi. Cras non ipsum massa. Quisque egestas fringilla ligula venenatis faucibus.',
      userId: 'user-00001',
      date: new Date(2021, 8, 10),
    },
    {
      id: 'comment-002',
      comment:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus id eros id lorem aliquet tempus. Praesent vestibulum risus ac nibh suscipit semper. Cras at libero ligula. Nunc sit amet tellus lacinia, rutrum magna et, gravida ante. Vivamus est mauris, imperdiet vitae elementum id, fringilla a nibh. Vestibulum ante ipsum primis.',
      userId: 'user-00003',
      date: new Date(2021, 8, 6),
    },
    {
      id: 'comment-003',
      comment:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus id eros id lorem aliquet tempus. Praesent vestibulum risus ac nibh suscipit semper. Cras at libero ligula. Nunc sit amet tellus lacinia, rutrum magna et, gravida ante. Vivamus est mauris, imperdiet vitae elementum id, fringilla a nibh. Vestibulum ante ipsum primis.',
      userId: 'user-00008',
      date: new Date(2021, 7, 18),
    },
    {
      id: 'comment-004',
      comment:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus id eros id lorem aliquet tempus. Praesent vestibulum risus ac nibh suscipit semper. Cras at libero ligula. Nunc sit amet tellus lacinia, rutrum magna et, gravida ante. Vivamus est mauris, imperdiet vitae elementum id, fringilla a nibh. Vestibulum ante ipsum primis.',
      userId: 'user-00002',
      date: new Date(2021, 7, 10),
    },
    {
      id: 'comment-005',
      comment:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas libero lacus, fermentum ac justo ac, fermentum semper magna. Donec id diam ipsum. Vivamus vulputate in tortor id cursus. Cras eu quam sollicitudin, rhoncus ligula et, consectetur diam. Nam quis interdum ex. Aliquam vulputate laoreet dapibus. Donec non dignissim enim. Maecenas lobortis vitae nunc ut tincidunt.',
      userId: 'user-00004',
      date: new Date(2021, 6, 21),
    },
  ],
  publishedOn: 'rarible',
};

const ItemPage = () => {
  const params = useParams();
  const { darkMode } = useSelector((state) => state.mode);
  const history = useHistory();

  return (
    <PresentationSection column>
      <div className={classes.BackSection}>
        <button onClick={() => history.goBack()}>Back</button>
      </div>
      <Heading
        title={itemDetails.title}
        style={{ color: darkMode ? '#8e8e8e' : '#323233' }}
      />
      <div className={classes.ProductDetailsContainer}>
        <div className={classes.ProductImages}>
          <Carousel itemDetails={itemDetails} />
          <div>total likes, total comments</div>
        </div>
        <div className={classes.ProductDetails}>
          <div className={classes.Description}>
            <h3>{itemDetails.title}</h3>
            <p>{itemDetails.description}</p>
          </div>
          <ActionButtons
            outLink={itemDetails.link}
            publishedOn={itemDetails.publishedOn}
          />
          <div>Like, Comment</div>
          <div>Add New Comment Input Area</div>
          <div>Comments</div>
        </div>
      </div>
    </PresentationSection>
  );
};

export default ItemPage;
