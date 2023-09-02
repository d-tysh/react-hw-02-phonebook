import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { Layout } from "pages/Layout";
import { RestrictedRoute } from "./RestrictedRoute";
import { PrivateRoute } from "./PrivateRoute";
import { lazy, useEffect } from "react";
import { fetchCurrentUser } from "redux/auth/operations";
import { selectIsFetchingCurrUser } from "redux/auth/selectors";

const Home = lazy(() => import('../pages/Home'))
const Contacts = lazy(() => import('../pages/Contacts'))
const Register = lazy(() => import('../pages/Register'))
const LogIn = lazy(() => import('../pages/LogIn'))

export const App = () => {
  const dispatch = useDispatch();
  const { isFetchingCurrUser } = useSelector(selectIsFetchingCurrUser);

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch])

  return isFetchingCurrUser ? <div>Refreshing user...</div> : (
    <div>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route 
            path='/register' 
            element={
              <RestrictedRoute redirectTo="/contacts" component={<Register />} />
            } 
          />
          <Route 
            path='/login' 
            element={
              <RestrictedRoute redirectTo="/contacts" component={<LogIn />} />
            } 
          />
          <Route 
            path='/contacts' 
            element={
              <PrivateRoute redirectTo="/login" component={<Contacts />} />
            }
          />
        </Route>
      </Routes>
    </div>
  );
};
