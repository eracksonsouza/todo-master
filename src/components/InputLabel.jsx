const InputLabel = (props) => {
  return (
    <label className="text-sm font-semibold text-[#35383e]" {...props}>
      {props.children}
    </label>
  );
};

export default InputLabel;