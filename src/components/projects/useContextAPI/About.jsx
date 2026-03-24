import { useContext } from "react";
import { BioContext } from ".";

export const About = () => {
  const { myName, myAge } = useContext(BioContext);
  return (
     <div>
      <h1>📄 About Page</h1>

      <p>
        Hi, I’m <strong>{myName}</strong>.
      </p>

      <p>
        I’m {myAge} years old and currently learning React deeply.
      </p>

      <p>
        This page also consumes the same global data using Context API.
      </p>
    </div>
  );
};
