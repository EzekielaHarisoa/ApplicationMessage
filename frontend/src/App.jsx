import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login.jsx";
import Signin from "./components/Signin.jsx";
// import Img from "./assets/photo.jpg";
export default function App() {
  return (
    <div className="flex m-10  flex-col lg:flex-row bg-pink-300 shadow-md ">
      <div className=" " >
        
      </div>
      <div className="">
        <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Signin />} />
        </Routes>
      </Router>
      </div>
    </div>
  );
}
