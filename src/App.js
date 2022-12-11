import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Addons from './components/Addons';
import Profileinfo from './components/Profileinfo';
import Selectplan from './components/Selectplan';
import Sidebar from './components/Navbar';
import Summary from './components/Summary';
import Thankyou from './components/Thankyou';


function App() {

  const [user, setUser] = useState({})

  return (
    <div className='flex flex-col md:flex-row'>
      <Router>
        <Sidebar />
        <Routes>
          <Route path='/' element={< Profileinfo user={user} setUser={setUser}/>}/>
          <Route path='/register/plan' element={< Selectplan />}/>
          <Route path='/register/addons' element={< Addons />}/>
          <Route path='/register/summary' element={< Summary />}/>
          <Route path='/register/thankyou' element={< Thankyou />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
