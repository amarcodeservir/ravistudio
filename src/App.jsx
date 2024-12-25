import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import Index from "./Components/Home/Index";
import About from "./Components/About/About";
import BlogPage from "./Components/Blog/BlogPage";
import Photography from "./Components/Photography/Photography";
import Birthday from "./Components/HeaderPhotography/Birthday";
import ContactForm from "./Components/Contact/ContactForm";
import AdminDashboard from "./Components/Admin/AdminDashboard";
import PreWedding from "./Components/HeaderPhotography/PreWedding";
import PostWedding from "./Components/HeaderPhotography/PostWedding";
import Wedding from "./Components/HeaderPhotography/Wedding";
import Fashion from "./Components/HeaderPhotography/Fashion";
import Maternity from "./Components/HeaderPhotography/Maternity";

// testing development this is second push
function App() {
  const { isAdmin, isUserLogin } = AdminDashboard();
// sdjkhbfjjsdhbdhbv
  return (
    <Router>
      <Routes>

        <Route path="" element={<Layout />}>
          <Route path="/" element={<Index />} />
          <Route path="About" element={<About />} />
          <Route path="blog" element={<BlogPage />} />
          <Route path="/photography" element={<Photography />} />
          <Route path="/preWedding" element={<PreWedding />} />
          <Route path="Birthday" element={<Birthday />} />
          <Route path="ContactForm" element={<ContactForm />} />
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="prewedding" element={<PreWedding/>} />
          <Route path="wedding" element={<Wedding />} />
          <Route path="postwedding" element={<PostWedding/>} />
          <Route path="fashion" element={<Fashion />}/>
          <Route path="maternity" element={<Maternity />}/>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
// asdfsf