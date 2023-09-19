import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateNote from "./pages/CreateNote";
import EditNote from "./pages/EditNote";
import Notes from "./pages/Notes";

const App = () => {
  return (
    <main id="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Notes />} />
          <Route path="/create-note" element={<CreateNote />} />
          <Route path="/edit-note/:id" element={<EditNote />} />/
        </Routes>
      </BrowserRouter>
    </main>
  );
};

export default App;
