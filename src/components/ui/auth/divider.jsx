import './Divider.scss';

const Divider = ({ 
  text,
  orientation = "horizontal",
  className = '',
  ...props 
}) => {
  if (text) {
    return (
      <div className={`divider divider--with-text ${className}`} {...props}>
        <hr className="divider__line" />
        <span className="divider__text">{text}</span>
        <hr className="divider__line" />
      </div>
    );
  }
  
  return <hr className={`divider ${className}`} {...props} />;
};

export default Divider;