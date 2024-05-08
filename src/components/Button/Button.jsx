import "./Button.css";

function Button({ text, func }) {
  return (
    <>
      <button onClick={func} className="button accent">
        {text}
      </button>
    </>
  );
}

export default Button;
