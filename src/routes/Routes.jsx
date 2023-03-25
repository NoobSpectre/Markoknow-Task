import { Routes as Router, Route } from 'react-router-dom';
import FirstPage from '../pages/FirstPage';
import SecondPage from '../pages/SecondPage';

export const Routes = () => {
  return (
    <Router>
      <Route path="/" element={<FirstPage />} />
      <Route path="/second-page" element={<SecondPage />} />
    </Router>
  );
};
