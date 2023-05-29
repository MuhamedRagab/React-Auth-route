import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CookiesProvider } from "react-cookie";

//** Pages
import LayoutComponent from "../layout/Layout";
import HomeComponent from "../app";
import AboutComponent from "../app/about";
import ContactComponent from "../app/contact";
import LoginComponent from "../app/(auth)/login";
import AuthPage from "../app/(auth)";

export default function Root() {
  return (
    <CookiesProvider>
      <Router>
        <Routes>
          <Route path="auth" element={<AuthPage />}>
            <Route index path="login" element={<LoginComponent />} />
          </Route>
          <Route element={<LayoutComponent />}>
            <Route path="/" index element={<HomeComponent />} />
            <Route path="/about" element={<AboutComponent />} />
            <Route path="/contact" element={<ContactComponent />} />
          </Route>
        </Routes>
      </Router>
    </CookiesProvider>
  );
}
