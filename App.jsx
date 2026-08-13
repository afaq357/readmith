import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Article from "./pages/Article";
import Category from "./pages/Category";
import About from "./pages/About";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Terms from "./pages/Terms";
import ScrollToTop from "./components/ScrollToTop";
import MetaPixelTracker from "./components/MetaPixelTracker";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <MetaPixelTracker />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/article/:slug" element={<Article />} />

        <Route path="/category/:slug" element={<Category />} />

        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<Terms />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
