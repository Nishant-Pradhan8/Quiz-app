import ThemeSwitch from './components/themeswitch';
import Main from './components/main';
import {Route,Routes } from 'react-router-dom';
import Quiz from './components/quizpage';
import Result from './components/result';
import Preferences from './components/preferences';
import { useContext } from 'react';
import DataContext from './Context/context';



function App() {
  const {theme} = useContext(DataContext)
  return (
    <div className={theme==='Light'?'App':'App App-dark'}>
      <ThemeSwitch />
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/quiz" element={<Quiz />}></Route>
        <Route path="/preference" element = {<Preferences />}></Route>
        <Route path='/result' element = {<Result />}></Route>
      </Routes>
     
    </div>
  );
}

export default App;
