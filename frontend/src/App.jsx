import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home.jsx";
import Signin from "./components/Signin.jsx";
// import Img from "./assets/photo.jpg";
export default function App() {
  return (
    <div  className=" h-screen">     
        <Router>
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/" element={<Signin />} />
        </Routes>
      </Router>
    </div>
  );
}
