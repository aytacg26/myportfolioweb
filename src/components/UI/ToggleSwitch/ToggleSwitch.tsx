import classes from './ToggleSwitch.module.scss';

interface IProps {
  isChecked: boolean;
  switchCheckHandler: () => void;
}

const ToggleSwitch = ({ switchCheckHandler, isChecked }: IProps) => {
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
