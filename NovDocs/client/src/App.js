import React from 'react';
import Editor from './component/Editor';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from 'react-router-dom'
import { v4 as uuid } from 'uuid'

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path='/' element={<Navigate to={`/docs/${uuid()}`}/>} />
          <Route exact path='/docs/:id' element={<Editor/>} />
        </Routes>
      </Router>
    </>
  );
};

export default App;

