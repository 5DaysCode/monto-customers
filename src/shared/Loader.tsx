import React, { useState, useEffect } from "react";

const Loader = () => {
  const [timePassed, setTimePassed] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimePassed(timePassed + 1);
    }, 1000);
    return () => clearInterval(intervalId);
  }, [timePassed]);

  return (
    <div style={{ textAlign: "center" }}>
      <p>Loading... ({timePassed}s)</p>
      <div className="loader"></div>
    </div>
  );
};

export default Loader;
