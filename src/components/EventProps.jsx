export const EventProps = () => {
  const handleOnClick = (name) => {
    alert(`Button clicked by ${name}`);
  };
  const handleMouseOver = () => {
    console.log("Mouse over event triggered!");
  };
  return (
    <>
      <WelcomeMessage
        onClick={() => handleOnClick("atul")}
        onMouseEnter={handleMouseOver}
      />
    </>
  );
};

const WelcomeMessage = (props) => {
  const { onClick, onMouseEnter } = props;
  const handleGreeting = () => {
    console.log("Hello, welcome to the event handling demo!");
    onClick();
  };
  return (
    <>
      <button
        onClick={onClick}
        className="btn btn-primary text-red-600 border-2 p-3 rounded"
      >
        Click me
      </button>
      <button
        onMouseEnter={onMouseEnter}
        className="btn btn-secondary text-blue-600 border-2 p-3 rounded"
      >
        Hover me
      </button>
      <button
        onClick={handleGreeting}
        className="btn btn-success text-green-600 border-2 p-3 rounded"
      >
        Greeting
      </button>
    </>
  );
};
