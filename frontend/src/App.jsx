import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login.jsx";
import Signin from "./components/Signin.jsx";
// import Img from "./assets/photo.jpg";
export default function App() {
  return (
    <div className="card card-side bg-base-100 shadow-sm">
      <div className="block"  style={{
    backgroundImage:URL("./assets/photo.jpg"),
  }}>
        <div className="">
          <h2>Hello! welcome</h2>
          <p>Lorem ipsum dolor sit amet, consectetur 
            adipisicing elit. Minus aliquam consequatur 
            rem, quas impedit qui quos ducimus obcaecati 
            doloribus corrupti mollitia tempora ea asperiores
             laudantium adipisci unde natus alias excepturi?</p>

        </div>
      </div>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signin />} />
        </Routes>
      </Router>
    </div>
  );
}
