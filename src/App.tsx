import { Route, Routes } from "react-router-dom";
import "./App.scss";
import MainLayout from "./layouts/MainLayout/MainLayout";
import { Home } from "./pages/Home";
import { SignIn } from "./pages/SignIn";
import { SignUp } from "./pages/SignUp";

function Aa() {
  return <h2>aaaaaa</h2>;
}

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
          <Route index element={<Home />} />
          <Route path="a" element={<Aa />} />
          <Route path="b" element={<Bb />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
