import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import Index from "./Components/Home/Index";
import About from "./Components/About/About";
import BlogPage from "./Components/Blog/BlogPage";
import Photography from "./Components/Photography/Photography";
import Birthday from "./Components/HeaderPhotography/Birthday";
import Fashion from "./Components/HeaderPhotography/Fashion";
import kittyParty from "./Components/HeaderPhotography/KittyParty";



function App() {
  return (
    <Router>
      <Routes>
        <Route path="" element={<Layout />}>
          <Route path="/" element={<Index />} />
          <Route path="About" element={<About />} />
          <Route path="blog" element={<BlogPage />} />
          <Route path="/photography" element={<Photography />} />
          <Route path="/preWedding" element={<Photography />} />
          <Route path="Birthday" element={<Birthday />} />
          <Route path="Fashion" element={<Fashion />} />
          <Route path="kittyParty" element={<kittyParty />} />


        </Route>
      </Routes>
    </Router>
  );
}

export default App;
