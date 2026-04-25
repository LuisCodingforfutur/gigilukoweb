import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Venues from "./pages/Venues";
import Users from "./pages/Users"; // Deine ECHTE Users-Seite
import Impressum from "./pages/Impressum";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import PrivacyPolicyDE from "./pages/PrivacyPolicyDE";
import TermsOfService from "./pages/TermsOfService";
import TermsOfServiceDE from "./pages/TermsOfServiceDE";

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/venues" element={<Venues />} />
          <Route path="/users" element={<Users />} />
          <Route path="/impressum" element={<Impressum />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/privacy-de" element={<PrivacyPolicyDE />} />
          <Route path="/terms" element={<TermsOfService />} />
          <Route path="/terms-de" element={<TermsOfServiceDE />} />
        </Routes>
      </Layout>
    </Router>
  );
};
export default App;
