import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginCard from "./LoginCard";
import Dashboard from "./Dashboard";
import GenrePage from "./GenrePage";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginCard />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/genre" element={<GenrePage />} />
      </Routes>
    </Router>
  );
}

export default App;
