import "./App.css";
import Tiga from "./pages/Tiga";
import { Routes, Route } from "react-router-dom";
import Form from "./pages/form";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/limas" element={<Tiga />} />
        <Route path="/form" element={<Form />} />
      </Routes>
    </>
  );
}

export default App;
