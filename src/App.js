import './App.css';
import MainContextProvider from './context/mainContext';
import Courses from './Courses';

function App() {

  return (
    <MainContextProvider>
      <div className="App">
        <Courses />
      </div>
    </MainContextProvider>
  )
}

export default App;
