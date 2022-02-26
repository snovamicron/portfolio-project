import './App.css';
import Home from './components/Home';
import DataContextProvider from './context/DataContext'

function App() {
  return (
    <>
    <DataContextProvider>
      <Home/>
      </DataContextProvider>
    </>
  );
}

export default App;
