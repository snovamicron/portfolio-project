
// components
import Home from './components/Home'

// context
import DataContextProvider from './context/DataContextProvider';

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
