import { Game, Test } from "features";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="game" element={<Game />} />
        <Route path="test" element={<Test />} />

        <Route path="*" element={<Navigate replace to="/test" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
