import { HashRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Assignment1 from "./assignments/ASG_2024_12_17_1";
import Assignment2 from "./assignments/ASG_2024_12_18_1";
import Assignment3 from "./assignments/ASG_2024_12_18_2";
import Assignment4 from "./assignments/ASG_2024_12_19_1";
import Assignment5 from "./assignments/ASG_2024_12_19_2"; 
import Assignment6 from "./assignments/ASG_2024_12_20_1";
import Assignment7 from "./assignments/ASG_2024_12_23_1";
import Assignment8 from "./assignments/ASG_2024_12_23_2";
import Assignment9 from "./assignments/ASG_2024_12_24_1";
import Assignment10 from "./assignments/ASG_2024_12_30_1";
import Assignment11 from "./assignments/ASG_2024_12_31_1";
import Assignment12 from "./assignments/ASG_2025_01_01_1";
import Assignment13 from "./assignments/ASG_2025_01_02_1";
import Assignment14 from "./assignments/ASG_2025_01_06_1";
import Assignment15 from "./assignments/ASG_2025_01_07_1";
import Assignment16 from "./assignments/ASG_2025_01_08_1";
import Assignment17 from "./assignments/ASG_2025_01_09_1";
import Assignment18 from "./assignments/ASG_2025_01_10_1";
import Assignment19 from "./assignments/ASG_2025_01_21_1";
import Assignment20 from "./assignments/ASG_2025_01_22_1";
import Assignment21 from "./assignments/ASG_2025_02_13_1";
import Assignment22 from "./assignments/ASG_2025_02_17_1";
import Assignment23 from "./assignments/ASG_2025_02_27_1";
import Assignment24 from "./assignments/ASG_2025_03_03_1";
import Assignment25 from "./assignments/ASG_2025_03_04_1";
import Assignment26 from "./assignments/ASG_2025_03_05_1";
import Assignment27 from "./assignments/ASG_2025_03_05_2";
import Assignment28 from "./assignments/ASG_2025_03_06_1";

function App() {
  return (
    // HashRouter is used to becz of github pages 
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ASG_2024_12_17_1" element={<Assignment1 />} />
        <Route path="/ASG_2024_12_18_1" element={<Assignment2 />} />
        <Route path="/ASG_2024_12_18_2" element={<Assignment3 />} />
        <Route path="/ASG_2024_12_19_1" element={<Assignment4 />} />
        <Route path="/ASG_2024_12_19_2" element={<Assignment5 />} />
        <Route path="/ASG_2024_12_20_1" element={<Assignment6 />} />
        <Route path="/ASG_2024_12_23_1" element={<Assignment7 />} />
        <Route path="/ASG_2024_12_23_2" element={<Assignment8 />} />
        <Route path="/ASG_2024_12_24_1" element={<Assignment9 />} />
        <Route path="/ASG_2024_12_30_1" element={<Assignment10 />} />
        <Route path="/ASG_2024_12_31_1" element={<Assignment11 />} />
        <Route path="/ASG_2025_01_01_1" element={<Assignment12 />} />
        <Route path="/ASG_2025_01_02_1" element={<Assignment13 />} />
        <Route path="/ASG_2025_01_06_1" element={<Assignment14 />} />
        <Route path="/ASG_2025_01_07_1" element={<Assignment15 />} />
        <Route path="/ASG_2025_01_08_1" element={<Assignment16 />} />
        <Route path="/ASG_2025_01_09_1" element={<Assignment17 />} />
        <Route path="/ASG_2025_01_10_1" element={<Assignment18 />} />
        <Route path="/ASG_2025_01_21_1" element={<Assignment19 />} />
        <Route path="/ASG_2025_01_22_1" element={<Assignment20 />} />
        <Route path="/ASG_2025_02_13_1" element={<Assignment21 />} />
        <Route path="/ASG_2025_02_17_1" element={<Assignment22 />} />
        <Route path="/ASG_2025_02_27_1" element={<Assignment23 />} />
        <Route path="/ASG_2025_03_03_1" element={<Assignment24 />} />
        <Route path="/ASG_2025_03_04_1" element={<Assignment25 />} />
        <Route path="/ASG_2025_03_05_1" element={<Assignment26 />} />
        <Route path="/ASG_2025_03_05_2" element={<Assignment27 />} />
        <Route path="/ASG_2025_03_06_1" element={<Assignment28 />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
