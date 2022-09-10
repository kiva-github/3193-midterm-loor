import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";

// pages
import Home from "./pages/home/Home";
import EnterCode from './pages/enter-code/EnterCode'
import HowItWorks from "./pages/how-it-works/HowItWorks";
import Vote from "./pages/vote/Vote";
import Selections from "./pages/selections/Selections";
import Confirmation from "./pages/confirmation/Confirmation";
import Complete from './pages/complete/Complete'

function App() {
  return (
    <div>
      <header>
        <div className="placeholder-logo"></div>
      </header>

      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
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
  );
}

export default App;
