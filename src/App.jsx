import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./partials/Navbar";

import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Products from "./pages/Products";
import SingleProject from "./pages/SingleProject";
import SingleProduct from "./pages/SingleProduct";
import About from "./pages/About";
import Contact from "./pages/Contact";

import { AnimatePresence } from "framer-motion";
// Exit before enter, tar bort den innan man öppnar en ny.
// Animation som man hämtat från "framer-motion".

function App() {
  return (
    <div>
      <Navbar />
      <AnimatePresence exitBeforeEnter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:projectId" element={<SingleProject />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:productId" element={<SingleProduct />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}
// Route och path navigerar så när användaren klickar så hittar den lättare var på hemsidan man är och i sökfältet med.
// Routes hämtas från "react-router-dom" och wrappar in mellan "Routes".
export default App;
