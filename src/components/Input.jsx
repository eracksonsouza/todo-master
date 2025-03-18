import InputLabel from "./InputLabel";

const Input = ({ label, ...rest }) => {
  return (
    <div className="space-y-1 flex flex-col text-left">
      <InputLabel
        className="text-sm font-semibold text-[#35383e]"
        htmlFor={rest.id}
      >
        {label}
      </InputLabel>
      <input
        className="px-4 py-3 border-solid border border-[#ECECEC] rounded-lg placeholder:text-sm placeholder:text-[#9c9e9f] outline-[#00ADB5]"
        {...rest}
      />
    </div>
  );
};

export default Input;
