import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Signup from "./components/Signup";
import Success from "./components/Success";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Signup />} />
        <Route path="/success" element={<Success />} />
      </Routes>
    </Router>
  );
}

export default App;
