import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Layout/Layout";
import Index from "./Home/Index";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Index />} />{" "}
          {/* This will render Index as default child */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
