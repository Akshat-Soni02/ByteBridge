import React, { Fragment, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser, loadUser } from '../Store/UserSlice';
import { useNavigate } from 'react-router';

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { loading, isAuthenticated, user } = useSelector((state) => state.user);

  useEffect(() => {
    if (!loading && !user) {
      console.log(user);
      // dispatch(loadUser()).then((result) => {
      //   if (isAuthenticated) {
      //   } else {
      //     navigate('/login');
      //   }

      // });

    }
  }, [loading]);

  return (
    <Fragment>
      <div>Home</div>
      <button onClick={() => {
        dispatch(logoutUser());
        navigate('/login');
      }}>logout</button>
    </Fragment>
  )
}

export default Home;