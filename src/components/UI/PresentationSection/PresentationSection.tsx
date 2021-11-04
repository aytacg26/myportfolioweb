import classes from './PresentationSection.module.scss';
import PropTypes from 'prop-types';

interface IProps {
  children: JSX.Element | JSX.Element[];
  column: boolean;
}

const PresentationSection = ({ children, column }: IProps) => {
  return (
    <div
      className={
        column
          ? classes.PresentationSectionContainerColumn
          : classes.PresentationSectionContainerRow
      }
    >
      {children}
    </div>
  );
};

export default PresentationSection;

PresentationSection.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  column: PropTypes.bool,
};

PresentationSection.defaultProps = {
  column: false,
};
