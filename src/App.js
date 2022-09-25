import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";

// styles
import './App.css'

// pages
import Home from "./pages/home/Home";
import EnterCode from './pages/enter-code/EnterCode'
import HowItWorks from "./pages/how-it-works/HowItWorks";
import Vote from "./pages/vote/Vote";
import Selections from "./pages/selections/Selections";
import Confirmation from "./pages/confirmation/Confirmation";
import Complete from './pages/complete/Complete'
import VotingResults from "./components/voting-results/VotingResults";
import HomeButtons from "./components/home-buttons/HomeButtons";

// assets
import gradient from './assets/Gradient.png'

function App() {
  return (
    <div className='app-container'>

      <div className='app-bg'>
        <img src={gradient} alt='gradient background' />
      </div>

      <div className='app-content-container'>
        <header>
          <div className="placeholder-logo"></div>
        </header>

        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />}>
              <Route path='home' element={<HomeButtons />} />
              <Route path='voting' element={<VotingResults />} />
            </Route>
            <Route path='how-it-works' element={<HowItWorks />} />
            <Route path='enter-code' element={<EnterCode />} />
            <Route path='vote' element={<Vote />} />
            <Route path='selections' element={<Selections />} />
            <Route path='confirmation' element={<Confirmation />} />
            <Route path='complete' element={<Complete />} />
          </Routes>
        </BrowserRouter>


        <Outlet />
      </div>
      
    </div>
  );
}

export default App;
