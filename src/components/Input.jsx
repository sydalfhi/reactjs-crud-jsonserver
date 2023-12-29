const Input = (props) => {
  const { styled, reference, type, placeholder } = props;
  return (
    <input
      type={type}
      placeholder={placeholder ?? ""}
      className={styled}
      ref={reference}
    />
  );
};

export default Input;
