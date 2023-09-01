import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { Layout } from "pages/Layout";
// import { Home } from "pages/Home";
// import { Contacts } from "pages/Contacts";
// import { Register } from "pages/Register";
// import { LogIn } from "pages/LogIn";
import { RestrictedRoute } from "./RestrictedRoute";
import { PrivateRoute } from "./PrivateRoute";
import { lazy, useEffect } from "react";
import { refreshUser } from "redux/auth/operations";
import { selectIsRefreshing } from "redux/auth/selectors";

const Home = lazy(() => import('../pages/Home'))
const Contacts = lazy(() => import('../pages/Contacts'))
const Register = lazy(() => import('../pages/Register'))
const LogIn = lazy(() => import('../pages/LogIn'))

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch])

  return isRefreshing ? <div>Refreshing user...</div> : (
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
