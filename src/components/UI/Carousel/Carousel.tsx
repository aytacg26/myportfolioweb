import React, { DragEvent } from 'react';
import classes from './Carousel.module.scss';
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from 'react-icons/bs';

import PropTypes from 'prop-types';

interface carouselArg {
  itemDetails: {
    images: { id: string; url: string }[];
    title: string;
  };
}

const handleDragStart = (e: DragEvent) => e.preventDefault();
const Carousel = ({ itemDetails }: carouselArg) => {
  const items = itemDetails.images.map((item) => (
    <img
      src={item.url}
      key={item.id}
      alt={itemDetails.title}
      onDragStart={handleDragStart}
      role='presentation'
    />
  ));

  const thumbnails = itemDetails.images.map((item) => (
    <img
      key={item.id}
      src={item.url}
      alt={itemDetails.title}
      onDragStart={handleDragStart}
      role='presentation'
    />
  ));

  return (
    <div className={classes.CarouselContainer}>
      <div className={classes.ImageSection}>
        <span className={classes.LeftArrow}>
          <BsFillArrowLeftCircleFill
            onClick={() => {
              console.log('Left Arrow Clicked');
            }}
          />
        </span>
        <div className={classes.Images}>{items}</div>

        <span className={classes.RightArrow}>
          <BsFillArrowRightCircleFill
            onClick={() => {
              console.log('Right Arrow Clicked');
            }}
          />
        </span>
      </div>
      <div className={classes.Thumbnails}>{thumbnails}</div>
    </div>
  );
};

export default Carousel;

Carousel.propTypes = {
  itemDetails: PropTypes.object.isRequired,
};
