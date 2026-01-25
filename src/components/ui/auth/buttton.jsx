import './Button.scss';

const Button = (({ 
  children, 
  variant = "primary", 
  size = "medium",
  type = "button",
  fullWidth = false,
  loading = false,
  disabled = false,
  startIcon,
  endIcon,
  className = '',
  ...props
}, ref) => {
  return (
    <button
      ref={ref}
      type={type}
      disabled={disabled || loading}
      className={`
        button 
        button--${variant} 
        button--${size} 
        ${fullWidth ? 'button--full-width' : ''} 
        ${loading ? 'button--loading' : ''}
        ${className}
      `}
      {...props}
    >
      {loading && (
        <span className="button__loader">
          <div className="button__spinner"></div>
        </span>
      )}
      
      {startIcon && !loading && (
        <span className="button__icon button__icon--start">{startIcon}</span>
      )}
      
      <span className="button__content">{children}</span>
      
      {endIcon && !loading && (
        <span className="button__icon button__icon--end">{endIcon}</span>
      )}
    </button>
  );
});

Button.displayName = 'Button';

export default Button;