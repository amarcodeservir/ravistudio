import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import Index from "./Components/Home/Index";
import About from "./Components/About/About";
import BlogPage from "./Components/Blog/BlogPage";
import Photography from "./Components/Photography/Photography";
import Birthday from "./Components/HeaderPhotography/Birthday";
import ContactForm from "./Components/Contact/ContactForm";
import AdminDashboard from "./Admin/MenuPages/AdminDashboard";
// import AdLayout from "./Admin/AdLayout";

function App() {
  const { isAdmin, isUserLogin } = AdminDashboard(); // This is incorrect, should be removed or handled differently.

  return (
    <Router>
      <Routes>
        {/* Public routes */}
        <Route path="" element={<Layout />}>
          <Route path="/" element={<Index />} />
          <Route path="About" element={<About />} />
          <Route path="blog" element={<BlogPage />} />
          <Route path="/photography" element={<Photography />} />
          <Route path="/preWedding" element={<Photography />} />
          <Route path="Birthday" element={<Birthday />} />
          <Route path="ContactForm" element={<ContactForm />} />
          <Route path="/admin" element={<AdminDashboard />} />
        </Route>


      </Routes>
    </Router>
  );
}

export default App;
