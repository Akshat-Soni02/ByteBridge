import { BrowserRouter as Router,Route,Routes, useNavigate} from 'react-router-dom';
import UserLogin from './components/user/UserLogin';
import Forgot from './components/user/Forgot';
import Signup from './components/user/Signup';
import Home from './components/Home';
import Otp from './components/user/Otp';
import {useDispatch, useSelector} from 'react-redux';
import { loadUser } from './Store/UserSlice';
import { useEffect } from 'react';
import Setavatar from './components/user/Setavatar';


// function App() {
//   // const navigate = useNavigate();
//   const{loading,isAuthenticated} = useSelector((state) => state.user);
//   // const dispatch = useDispatch();

//   //   useEffect(() => {
//   //     dispatch(loadUser()).then((result) => {
//   //       if (result.payload && isAuthenticated) {
//   //         navigate('/');
//   //       } else {
//   //         navigate('/login');
//   //       }
//   //     });

//   //     }, []);

//   // useEffect(() => {
//   //   if(isAuthenticated){
//   //     navigate('/');
//   //   }
//   // },[])

//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element = {<Home/>} />
//         <Route path="/forgotpassword" element = {<Forgot/>} />
//         <Route path="/Signup" element = {<Signup/>} />
//         <Route path="/login" element = {<UserLogin/>}/>
//         <Route path="/otpverification" element = {<Otp/>} />
//         <Route path = "/setavatar" element = {<Setavatar/>} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;


function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}

function AppRoutes() {
  const { isAuthenticated } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <Routes>
      <Route path="/" element = {<Home/>} />
         <Route path="/forgotpassword" element = {<Forgot/>} />
         <Route path="/Signup" element = {<Signup/>} />
         <Route path="/login" element = {<UserLogin/>}/>
         <Route path="/otpverification" element = {<Otp/>} />
         <Route path = "/setavatar" element = {<Setavatar/>} />
    </Routes>
  );
}

export default App;