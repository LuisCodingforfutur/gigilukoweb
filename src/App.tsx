import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import PrivacyPolicyDE from "./pages/PrivacyPolicyDE";
import TermsOfService from "./pages/TermsOfService";
import TermsOfServiceDE from "./pages/TermsOfServiceDE";
import Impressum from "./pages/Impressum";

const App: React.FC = () => {
    return (
        <Router>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/privacy" element={<PrivacyPolicy />} />
                    <Route path="/privacy-de" element={<PrivacyPolicyDE />} />
                    <Route path="/terms" element={<TermsOfService />} />
                    <Route path="/terms-de" element={<TermsOfServiceDE />} />
                    <Route path="/impressum" element={<Impressum />} />
                </Routes>
            </Layout>
        </Router>
    );
};

export default App;
