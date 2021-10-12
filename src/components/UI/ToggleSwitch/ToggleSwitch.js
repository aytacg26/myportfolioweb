import React from 'react';
import classes from './ToggleSwitch.module.css';

const ToggleSwitch = ({ switchCheckHandler, isChecked }) => {
  //   const [checked, setChecked] = useState(false);

  //   const switchCheckHandler = () => {
  //     setChecked((prevState) => !prevState);
  //   };

  return (
    <label className={classes.switch}>
      <input
        type='checkbox'
        checked={isChecked}
        onChange={switchCheckHandler}
      />
      <span className={`${classes.slider} ${classes.round}`}></span>
    </label>
  );
};

export default ToggleSwitch;
