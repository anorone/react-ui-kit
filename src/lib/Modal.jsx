import PropTypes from 'prop-types';

const Modal = ({ children, title, isOpen }) => isOpen && (
  <div className="
    absolute inset-0 bg-transparent
    flex items-center justify-center
    before:absolute before:w-full before:h-full
    before:bg-gray-300 before:opacity-60"
  >
    <div className="z-10 min-w-[25%] p-4 bg-white rounded-md shadow-lg">
      {title && (
        <>
          <p className="text-black text-2xl">{title}</p>
          <hr className="my-2" />
        </>
      )}
      <div className="text-slate-600">{children}</div>
    </div>
  </div>
);

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
  isOpen: PropTypes.bool,
};

Modal.defaultProps = {
  title: '',
  isOpen: false,
};

export default Modal;
