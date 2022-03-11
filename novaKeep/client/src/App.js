
// components
import Home from './components/Home'

// context
import DataContextProvider from './context/DataContextProvider';
import SnackContextProvidere from './context/SnackContextProvider';

function App() {
  return (
    <>
     <DataContextProvider>
       <SnackContextProvidere>
     <Home/>
       </SnackContextProvidere>
     </DataContextProvider>
    </>
  );
}

export default App;
