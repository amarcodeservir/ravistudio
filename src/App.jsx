import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Layout/Layout";
import Index from "./Home/Index";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Index />} />{" "}
      
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
