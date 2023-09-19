import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Notes } from "./pages/Notes";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"  element={<Notes/>s} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
