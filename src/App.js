import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import NoteState from './Context/Notes/noteState';
import Alert from './Components/Alert';

function App() {
  return (
    <>
      <NoteState>

        <Router>
          <Navbar />
          <Alert  message="Here we go"/>
          <div className="container col-md-10">
            <Routes>
              <Route exact path='/' element={<Home />}>
              </Route>
              <Route exact path='/about' element={<About />}>
              </Route>

            </Routes>
          </div>
        </Router>

      </NoteState>
    </>
  );
}

export default App;
