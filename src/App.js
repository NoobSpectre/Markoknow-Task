import './App.css';
import FirstPage from './pages/FirstPage';
import ContextProvider from './pages/ContentContext';
import SecondPage from './pages/SecondPage';

function App() {
  const id = 'second-page';

  return (
    <ContextProvider>
      <div className="App">
        <FirstPage id={id} />
        <SecondPage id={id} />
      </div>
    </ContextProvider>
  );
}

export default App;
