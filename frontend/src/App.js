import { BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import UserLogin from './components/UserLogin';
import Forgot from './components/Forgot';
import Signup from './components/Signup';
import Home from './components/Home';
import Otp from './components/Otp';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element = {<Home/>} />
        <Route path="/forgotpassword" element = {<Forgot/>} />
        <Route path="/Signup" element = {<Signup/>} />
        <Route path="/login" element = {<UserLogin/>}/>
        <Route path='/otpverification' element = {<Otp/>} />
      </Routes>
    </Router>
  );
}

export default App;
