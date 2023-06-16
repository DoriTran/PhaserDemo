import { Game, Live2d, Test } from "features";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="game" element={<Game />} />
        <Route path="test" element={<Test />} />
        <Route path="live2d" element={<Live2d />} />

        <Route path="*" element={<Navigate replace to="/live2d" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
