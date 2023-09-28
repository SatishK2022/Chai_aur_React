import { Outlet } from 'react-router-dom';
import { Provider, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import authService from "../appwrite/auth";
import { login, logout } from "../store/authSlice";
import "./App.css";
import { Header, Footer } from '../components';


function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }));
        } else {
          dispatch(logout());
        }
      })
      .finally(() => setLoading(false));
  }, []);

  return loading ? null : (
    <>
      <div className="min-h-screen flex flex-wrap content-between bg-gray-400">
        <div className="w-full block">
          <Header />
          <main>
            {/* <Outlet /> */}
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
}
   

export default App;
