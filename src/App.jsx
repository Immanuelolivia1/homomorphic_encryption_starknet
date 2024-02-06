import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import AppLayout from "./ui/AppLayout";
import InstructionsPage from "./pages/InstructionsPage";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="app" element={<AppLayout />}>
          <Route index element={<Navigate replace to="home" />} />
          <Route path="instructions" element={<InstructionsPage />} />
          <Route path="home" element={<HomePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
