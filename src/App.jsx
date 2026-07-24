//ARMAND A. SARSALE DC4 MWF 5:00 - 6:00 PM

import Header from "./Header";
import StudentCard from "./StudentCard";
import AttendanceCounter from "./AttendanceCounter";

function App() {
  return (
    <div className="app">
      <Header />
      <StudentCard name="Angel Cruz" age={20} course="BSIT" isRegular={true} />
      <StudentCard name="Mia Santos" age={19} course="BSIT" isRegular={false} />
      <StudentCard name="Jhon Dela Cruz" age={21} course="BSIT" isRegular={true} />
      <AttendanceCounter />
    </div>
  );
}

export default App;