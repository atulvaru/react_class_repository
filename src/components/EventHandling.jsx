// React Event Handling Component
export const EventHandling = () => {

  // 🟢 Function to handle button click and receive event object
  const handleEventButtonClick = (event) => {

    // event = SyntheticEvent object provided by React
    console.log(event);

    // event.type tells which event happened
    console.log(event.type);

    // alert message
    alert("Button Clicked!");
  };

  // 🟢 Function that receives both event and custom parameter
  const handleEventClick = (event, name) => {

    // printing full event object
    console.log(event);

    // accessing clicked element
    console.log(event.target);

    // showing user name
    alert(`Button Clicked by ${name}`);
  };

  return (
    <>
      {/* -------------------------------------------- */}
      {/* 1️⃣ Inline Arrow Function */}
      {/* Runs directly when button is clicked */}
      {/* -------------------------------------------- */}
      <button
        onClick={() => alert("Button Clicked!")}
        className="btn btn-primary text-red-600 border-2 p-3 rounded"
      >
        Inline Event
      </button>

      {/* -------------------------------------------- */}
      {/* 2️⃣ Passing Function Reference (Best Practice) */}
      {/* React automatically passes the event object */}
      {/* -------------------------------------------- */}
      <button
        onClick={handleEventButtonClick}
        className="btn btn-primary text-red-600 border-2 p-3 rounded"
      >
        Function Reference
      </button>

      {/* -------------------------------------------- */}
      {/* 3️⃣ Passing Custom Argument */}
      {/* We must use arrow function to pass parameters */}
      {/* event is manually passed here */}
      {/* -------------------------------------------- */}
      <button
        onClick={(event) => handleEventButtonClick(event)}
        className="btn btn-primary text-red-600 border-2 p-3 rounded"
      >
        Pass Event Manually
      </button>

      {/* -------------------------------------------- */}
      {/* 4️⃣ Passing Event + Custom Data */}
      {/* Here we pass event and name together */}
      {/* -------------------------------------------- */}
      <button
        onClick={(event) => handleEventClick(event, "Atul")}
        className="btn btn-primary text-red-600 border-2 p-3 rounded"
      >
        Event + Custom Argument
      </button>
    </>
  );
};