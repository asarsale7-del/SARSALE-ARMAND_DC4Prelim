import { useState } from "react";

function AttendanceCounter() {
  const [presentCount, setPresentCount] = useState(0);

  const handleMarkPresent = () => {
    setPresentCount((prevCount) => prevCount + 1);
  };

  const handleUndo = () => {
    setPresentCount((prevCount) => Math.max(0, prevCount - 1));
  };

  const handleReset = () => {
    setPresentCount(0);
  };

  return (
    <div className="attendance-counter">
      <h2>Students Present: {presentCount}</h2>
      <div className="counter-actions">
        <button onClick={handleMarkPresent}>Mark Present</button>
        <button onClick={handleUndo}>Undo</button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
}

export default AttendanceCounter;
