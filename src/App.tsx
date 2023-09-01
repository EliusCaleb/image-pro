import { Routes, Route } from "react-router-dom";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import PublicRoutes from "./routes/PublicRoutes";
import PrivateRoutes from "./routes/PrivateRoutes";

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoutes>
              <Home />
            </PrivateRoutes>
          }
        />
        <Route
          path="/signup"
          element={
            <PublicRoutes>
              <SignUp />
            </PublicRoutes>
          }
        />
      </Routes>
    </>
  );
}

export default App;
