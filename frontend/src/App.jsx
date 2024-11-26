import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import NotFoundPage from "./pages/NotFoundPage";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Layout component for pages that include Navbar and Footer
const Layout = ({ children }) => (
  <div>
    <Navbar />
    <main className="main-content">{children}</main>
    <Footer />
  </div>
);

const App = () => {
  return (
    <Routes>
      {/* Routes with Navbar and Footer */}
      <Route
        path="/"
        element={
          <Layout>
            <Home />
          </Layout>
        }
      />
      <Route
        path="/home"
        element={
          <Layout>
            <Home />
          </Layout>
        }
      />
      <Route
        path="/favorites"
        element={
          <Layout>
            <Favorites />
          </Layout>
        }
      />

      {/* Route without Navbar and Footer */}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default App;
