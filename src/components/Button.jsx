const Button = (props) => {
  const { styled, type, text } = props;
  return (
    <button className={styled} type={type}>
      {text}
    </button>
  );
};

export default Button;
