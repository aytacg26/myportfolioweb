import React from 'react';
import classes from './ItemCard.module.css';
import { getPublishDetails } from '../../../Utils/Utils';
import { FaHeart, FaRegHeart, FaComment } from 'react-icons/fa';
import NoImage from '../../../Assets/Images/NoImage.png';
import ActionButtons from '../ActionButtons/ActionButtons';

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
}) => {
  let desc;
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
