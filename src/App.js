import "./App.css";
import { Routes, Route } from "react-router-dom";
import SignIn from "./pages/SignIn/SignIn";
import Home from "./pages/Home/Home";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<SignIn />} />
      </Routes>
    </div>
  );
}

export default App;
