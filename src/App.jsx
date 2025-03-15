import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Courses from "./Courses/Courses";
import Signup from "./Components/Signup";
import Contact from "./Components/Contact";
import toast, { Toaster } from "react-hot-toast";
import { useAuth } from "./Context/AuthProvider";
import About from "./Components/About";
import Sample from "./Components/Sample";
import Cashcowsamples from "./Components/Cashcowsamples";
import VideoGenerate from "./Components/VideoGnerate";
import ImageGenerate from "./Components/ImageGenerate";

function App() {
  const [authUser, setAuthUser] = useAuth();
  console.log("Hello how are you", authUser);

  return (
    <Router> {/* Wrap everything inside Router */}
      <div className="dark:bg-black dark:text-white sm">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/course" element={<Courses />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/sample" element={<Sample />} />
          <Route path="/Cashcow" element={<Cashcowsamples />} />
          <Route path="/stockimage" element={<ImageGenerate />} />
          <Route path="/stockvideo" element={<VideoGenerate />} />
        </Routes>
        <Toaster />
      </div>
    </Router>
  );
}

export default App;
