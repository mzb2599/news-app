import { useState } from "react";
import "./App.css";
import Main from "./components/Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  const [newsData, setNewsData] = useState([]);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Main setNewsData={setNewsData} newsData={newsData} />}
          />
          <Route path="/news/:id" element={<Main newsData={newsData} />} />
        </Routes>
      </BrowserRouter>

      <div className="footer">
        <p>© 2023 News App. All rights reserved.</p>
      </div>
    </div>
  );
};

export default App;
