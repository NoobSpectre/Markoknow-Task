import './App.css';
import { Routes, Route } from 'react-router-dom';
import FirstPage from './pages/FirstPage';
import SecondPage from './pages/SecondPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<FirstPage />} />
        <Route path="/second-page" element={<SecondPage />} />
      </Routes>
    </div>
  );
}

export default App;
