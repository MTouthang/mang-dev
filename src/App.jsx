import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Resume from "./Page/Resume";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </>
  );
}

export default App;
