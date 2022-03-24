import './App.css';

// context provider
import UserDataProvider from './context/UserContext';

// components 
import Main from './components/Main';

function App() {
  return (
    <UserDataProvider>
      <Main/>
    </UserDataProvider>
  );
}

export default App;
