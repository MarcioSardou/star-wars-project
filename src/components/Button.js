import React from 'react';

const Button = React.forwardRef(({ className, variant = 'default', size = 'default', ...props }, ref) => {
  const baseStyles = "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";
  
  const variants = {
    default: "bg-yellow-400 text-black hover:bg-yellow-500",
    outline: "border border-yellow-400 text-yellow-400 hover:bg-yellow-400/10",
    ghost: "hover:bg-yellow-400/10 hover:text-yellow-400",
  };

  const sizes = {
    default: "h-10 py-2 px-4",
    sm: "h-9 px-3 rounded-md",
    lg: "h-11 px-8 rounded-md",
  };

  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className || ''}`;

  return (
    <button
      className={classes}
      ref={ref}
      {...props}
    />
  );
});

Button.displayName = "Button";

export { Button };

