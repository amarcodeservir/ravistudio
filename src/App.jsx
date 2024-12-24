import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import Index from "./Components/Home/Index";
import About from "./Components/About/About";
import BlogPage from "./Components/Blog/BlogPage";
import Photography from "./Components/Photography/Photography";
import Birthday from "./Components/HeaderPhotography/Birthday";
import ContactForm from "./Components/Contact/ContactForm";
import AdminDashboard from "./Components/Admin/AdminDashboard";
import ErrorBoundary from "./Components/ErrorBoundary/ErrorBoundary";
//dsfhjhbajdhfjvbfgdojisof
function App() {
  const { isAdmin, isUserLogin } = AdminDashboard();

  return (
    <Router>
      <ErrorBoundary>
        <Routes>
          {/* Main Layout Routes */}s
          <Route path="" element={<Layout />}>
            <Route path="/" element={<Index />} />
            <Route path="About" element={<About />} />
            <Route path="blog" element={<BlogPage />} />
            <Route path="/photography" element={<Photography />} />
            <Route path="/preWedding" element={<Photography />} />
            <Route path="Birthday" element={<Birthday />} />
            <Route path="ContactForm" element={<ContactForm />} />

            {/* Protected Route Example */}
            {isAdmin && <Route path="dashboard" element={<AdminDashboard />} />}
          </Route>
        </Routes>
      </ErrorBoundary>
    </Router>
  );
}

export default App;
