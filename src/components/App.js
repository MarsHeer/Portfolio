import React, { useEffect, useState } from "react";
import "../styles/App.css";
import Desk from "./Desk";
import Desktop from "./Desktop";
function App() {
  const [transition, setTransition] = useState(false);
  useEffect(() => {
    // setTimeout(() => setTransition(true), 5500);
  }, []);

  return (
    <>
      {!transition ? (
        <Desk callback={() => setTransition(true)} />
      ) : (
        <Desktop />
      )}
    </>
  );
}

export default App;
