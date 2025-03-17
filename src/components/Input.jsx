const Input = ({ label, ...rest }) => {
  return (
    <div className="space-y-1 flex flex-col text-left">
      <label className="text-sm font-semibold text-black" htmlFor={rest.id}>
        {label}
      </label>
      <input
        className="px-4 py-3 border-solid border border-[#ECECEC] rounded-lg placeholder:text-sm placeholder:text-[#9c9e9f] outline-[#00ADB5]"
        {...rest}
      />
    </div>
  );
};

export default Input;
