import React from 'react';
import classes from './ItemCard.module.scss';
import { getPublishDetails } from '../../../Utils/Utils';
import { FaHeart, FaRegHeart, FaComment } from 'react-icons/fa';
import NoImage from '../../../Assets/Images/NoImage.png';
import ActionButtons from '../ActionButtons/ActionButtons';
import { publish } from '../../../Types/UtilFunctionTypes';
import PropTypes from 'prop-types';

interface IProps {
  id: string;
  title: string;
  description: string;
  link: string;
  thumbnail: string;
  images: string[];
  likes: {}[]; //TODO : after creation of likes document, recreate this type, it will be an object array
  comments: {}[]; //TODO : after creation of comments document, recreate this type
  publishedOn: publish; //TODO : change this to publish type or create an publishedOn enum for all publishedOn props
}

//TODO: Try to refactor this component
const ItemCard = ({
  id,
  title,
  description,
  link,
  thumbnail,
  images,
  likes,
  comments,
  publishedOn,
}: IProps) => {
  let desc = '';
  if (description) {
    desc =
      description.length <= 100
        ? description
        : `${description.split('').splice(0, 100).join('')}...`;
  }

  const image = thumbnail ? thumbnail : NoImage;

  let publishDetails = getPublishDetails(publishedOn);

  return (
    <div className={classes.itemCardContainer}>
      <div className={classes.itemCardImage}>
        <img src={image} alt={title} title={title} />
      </div>
      <div className={classes.itemCardInfo}>
        <div className={classes.itemCardTitle}>
          <h3>{title}</h3>
          {publishDetails.image && (
            <img
              src={publishDetails.image}
              alt='Published Site Logo'
              title={title}
            />
          )}
        </div>

        <p>{desc}</p>
        <div className={classes.Interactions}>
          <span>
            {likes.length > 0 ? likes.length : 'No Like'}
            {likes.length > 0 ? (
              <FaHeart color='red' style={{ marginLeft: 4 }} />
            ) : (
              <FaRegHeart style={{ marginLeft: 4 }} />
            )}
          </span>{' '}
          <span>
            {comments.length > 0 ? comments.length : 'No Comment'}{' '}
            <FaComment style={{ marginLeft: 4 }} />
          </span>
        </div>
      </div>
      <ActionButtons
        onSiteLink={`/nft-art/${id}`}
        outLink={link}
        publishedOn={publishedOn}
      />
    </div>
  );
};

export default ItemCard;

ItemCard.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  link: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  images: PropTypes.arrayOf(PropTypes.string),
  likes: PropTypes.arrayOf(PropTypes.object),
  comments: PropTypes.arrayOf(PropTypes.object),
  publishedOn: PropTypes.string.isRequired,
};

//Create defaults for some of the props which are required to not to break the app.
