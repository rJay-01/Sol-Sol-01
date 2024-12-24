import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./component/Head";
import Aside from "./component/Aside";
import Footer from "./component/Footer";
import Main from "./component/Main";
import Contact from "./component/Contact"; 
import About from "./component/About"; // Import About component

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <div className="flex flex-1">
          <Aside />
          {/* Wrap Main content with Routes */}
          <Routes>
            <Route path="/" element={<Main />} /> {/* Home route */}
            <Route path="/contact" element={<Contact />} /> {/* Contact route */}
            <Route path="/about" element={<About />} /> {/* About route */}
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
