import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Header } from "./components/Header";
import { Home } from "./pages/Home";
import { Timer } from "./pages/Timer";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? 'dark' : ''}>
      <Router>
        <div className="h-screen">
          <Header darkMode={darkMode} setDarkMode={setDarkMode} />
          <main className="bg-gradient-to-b from-rose-700 via-rose-500 to-amber-200 dark:from-slate-950 dark:via-slate-800 dark:to-cyan-800 text-white">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/timer" element={<Timer />} />
            </Routes>
          </main>
        </div>
      </Router>
    </div>
  );
}

export default App;
