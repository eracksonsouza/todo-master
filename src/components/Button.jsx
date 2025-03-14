const Button = ({ children, variant= 'primary' }) => {
  const getVariantClasses = () => {
    if (variant === "primary") {
      return "bg-[#00ADB5] text-white";
    }

    if (variant === "ghost") {
      return "bg-transparent text-[#333333]";
    }
  };
  return (
    <div>
      <button className={`font-semibold flex gap-2 hover:opacity-80 transition
         rounded-md  px-3 py-1 text-xs ${getVariantClasses()}`}>
        {children}
      </button>
    </div>
  );
};

export default Button;
