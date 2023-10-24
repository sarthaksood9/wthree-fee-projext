import "./App.css";
import LandingPage from "./Components/LandingPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Components/Login";
import Memo from "./UseMemo/Memo";
import Usereducier from "./UseMemo/Usereducier";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
      {/* <Usereducier/> */}
      {/* <Memo/> */}
    </div>
  );
}

export default App;
