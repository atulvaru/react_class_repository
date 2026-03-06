// EventPropagation.jsx
// Demonstrates React Event Bubbling with Parent → Child → Button

export const EventPropagation = () => {

  // Parent click handler
  const handleParentClick = () => {
    console.log("Parent Div Clicked");
  };

  // Child click handler
  const handleChildClick = () => {
    console.log("Child Div Clicked");
  };

  // Button click handler
  const handleButtonClick = () => {
    console.log("Button Clicked");
  };

  return (
    // SECTION → Main container (centered layout)
    <section className="min-h-screen flex items-center justify-center bg-slate-900">

      {/* Parent Container */}
      <div
        onClick={handleParentClick}
        className="
          bg-red-500
          p-12
          rounded-xl
          text-white
          text-center
          cursor-pointer
          shadow-lg
        "
      >
        <h2 className="text-xl font-semibold mb-4">
          Parent Div
        </h2>

        {/* Child Container */}
        <div
          onClick={handleChildClick}
          className="
            bg-blue-500
            p-10
            rounded-lg
            cursor-pointer
            shadow-md
          "
        >
          <h3 className="text-lg font-medium mb-4">
            Child Div
          </h3>

          {/* Button Element */}
          <button
            onClick={handleButtonClick}
            className="
              bg-green-500
              px-6
              py-3
              rounded-lg
              font-semibold
              hover:bg-green-600
              transition
            "
          >
            Click Me
          </button>

        </div>
      </div>

    </section>
  );
};