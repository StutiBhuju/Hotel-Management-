import LoginPage from "./pages/AuthPages/LoginPage";
import RegisterPage from "./pages/AuthPages/RegisterPage";
import LandingPage from "./pages/LandingPage";
import DashBoardRoutes from "./pages/Dashboard/DashboardRoutes"

import { Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "./contexts/AuthContexts";

import Loader from "./components/Loader";

function App() {
  const { user, loading } = useAuth();

  // Wait until authentication state is determined
  if (loading) {
    return <Loader text="Preparing your stay..." fullScreen />;
  }

  return (
    <Routes>

      {/* Landing Page */}
      {!user ? (
        <Route
          path="/"
          element={<LandingPage />}
        />
      ) : (
        <Route
          path="/*"
          element={<DashBoardRoutes />}
        />
      )}

      {/* Login */}
      <Route
        path="/login"
        element={
          user ? (
            <Navigate to="/" replace />
          ) : (
            <LoginPage />
          )
        }
      />

      {/* Register */}
      <Route
        path="/register"
        element={
          user ? (
            <Navigate to="/" replace />
          ) : (
            <RegisterPage />
          )
        }
      />

    </Routes>
  );
}

export default App;