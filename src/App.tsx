import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import SignIn from "./pages/SignIn";
import ForgotPassword from "./pages/ForgotPassword";
import EmailSent from "./pages/EmailSent";
import ResetPassword from "./pages/ResetPassword";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route index element={<Home />} />
      <Route path="*" element={<NotFound />} />
      <Route path="signin" element={<SignIn />} />
      <Route path="forgot-password" element={<ForgotPassword />} />
      <Route path="reset-password" element={<ResetPassword />} />
      <Route path="email-sent" element={<EmailSent />} />
      <Route path="sign-up" element={<SignUp />} />
    </Routes>
  );
}

export default App;
