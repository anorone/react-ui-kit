import PropTypes from 'prop-types';
import cn from 'classnames';

const sizeClassName = {
  small: 'min-w-[56px] p-1',
  medium: 'min-w-[72px] px-2 py-1.5',
  large: 'min-w-[96px] p-2',
};

const colorClassName = {
  primary: 'bg-red-600',
  secondary: 'bg-cyan-600',
};

const Button = (props) => {
  const {
    children, size, color, rounded, disabled, onClick,
  } = props;

  const className = cn(
    'font-medium text-slate-50 disabled:bg-gray-500',
    sizeClassName[size],
    colorClassName[color],
    { rounded },
  );

  return (
    <button
      className={className}
      type="button"
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  rounded: PropTypes.bool,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  color: PropTypes.oneOf(['primary', 'secondary']),
};

Button.defaultProps = {
  disabled: false,
  rounded: true,
  size: 'medium',
  color: 'primary',
};

export default Button;
