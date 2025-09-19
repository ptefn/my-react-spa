// App.js
import './App.css';
// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          {/* Компонент Link работает как тег <a>, но не перезагружает страницу */}
          <Link to="/">Главная</Link> | <Link to="/about">Обо мне</Link>
        </nav>

        {/* Компонент Routes определяет, какой компонент показать в зависимости от URL */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;