import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PageHome from "./pages/home";
import PageAbout from "./pages/about";
import PageContact from "./pages/contact";
import Page404 from "./pages/404";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<PageHome />} />
          <Route path="/about" element={<PageAbout />} />
          <Route path="/contact" element={<PageContact />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
