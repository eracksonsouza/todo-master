const Button = ({
  children,
  variant = "primary",
  size = "small",
  className,
  ...rest
}) => {
  const getVariantClasses = () => {
    if (variant === "primary") {
      return "bg-[#00ADB5] text-white";
    }

    if (variant === "ghost") {
      return "bg-transparent text-[#333333]";
    }

    if (variant === "secondary") {
      return "bg-[#EEEEEE] text-[#35383E]";
    }
  };

  const getSizeClasses = () => {
    if (size === "small") {
      return "text-xs py-1";
    }

    if (size === "large") {
      return "text-sm py-2";
    }
  };



  return (
    <div>
      <button
        className={`font-semibold flex justify-center gap-2 hover:opacity-80 transition
         rounded-md  px-3 py-1 text-xs ${getVariantClasses()} ${getSizeClasses()} ${className}`}
        {...rest}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
