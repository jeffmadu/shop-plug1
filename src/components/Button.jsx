function Button({ children, type, dispatch, buttonFunction }) {
  return (
    <button
      className={type}
      onClick={() => {
        dispatch({ type: buttonFunction });
      }}
    >
      {children}
    </button>
  );
}

export default Button;
