import { Route, Routes } from "react-router-dom";
import "./App.scss";
import MainLayout from "./layouts/MainLayout/MainLayout";
import { Home } from "./pages/Home";
import { SignIn } from "./pages/SignIn";
import { SignUp } from "./pages/SignUp";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import { ProfileUser } from "./pages/ProfileUser";

function Bb() {
  return <h2>bbbbbbbbbb</h2>;
}

function App() {
  return (
    <>
      <Routes>
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/" element={<MainLayout />}>
          <Route
            index
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route
            path="/user/profile"
            element={
              <ProtectedRoute>
                <ProfileUser />
              </ProtectedRoute>
            }
          />
          <Route path="b" element={<Bb />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
