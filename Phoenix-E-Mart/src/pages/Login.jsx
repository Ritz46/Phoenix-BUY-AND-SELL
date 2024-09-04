import React from "react";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import auth, { authActions } from "../store/auth";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";


const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate=useNavigate();
  const uname = useRef();
  const role = useRef();
  const password = useRef();

  const submitHandler = async (event) => {
    event.preventDefault();
    let user = {
      username: uname.current.value,
      password: password.current.value,
    };
    console.log(user);

    if (role.current.value == "user") {
      let response = await fetch(`${`http://localhost:8000`}/signIn`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      // console.log(response.status);
      let data = await response.json();
      dispatch(authActions.login(data))
      // console.log(data);
      if(response.status==201){
        toast.success("Account Already Verified",{position:"top-center"});
        navigate('/home')
      }
      if(response.status==401){
        toast.error(data.message,{position:"top-center"});
      }
    }
    else{
      let response = await fetch(`${`http://localhost:8000`}/AdminLogin`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      // console.log(response.status);
      let data = await response.json();
      // dispatch(authActions.login(data))
      // console.log(data);
      if(response.status==201){
        toast.success("Account Already Verified",{position:"top-center"});
        navigate('/admin')
      }
      if(response.status==401){
        toast.error(data.message,{position:"top-center"});
      }
    }
  };
  return (
    <div className="min-w-screen min-h-screen bg-gray-900 flex items-center justify-center px-5 py-5">
      <div
        className="bg-gray-100 text-gray-500 rounded-3xl shadow-xl w-full overflow-hidden"
        style={{ maxWidth: "1000px" }}
      >
        <div className="md:flex w-full">
          <div className="hidden md:block w-1/2 bg-[#000] py-10 px-10">
            <img
              src="logo2.png"
              alt="Side Image"
              className="object-cover object-center w-full h-full rounded-full"
            />
          </div>
          <div className="w-full md:w-1/2 py-10 px-5 md:px-10">
            <div className="text-center mb-10">
              <h1 className="font-bold text-3xl text-gray-900">LOGIN</h1>
              <p>Enter your login information</p>
            </div>
            <div className="flex -mx-3">
              <div className="w-full px-3 mb-5">
                <label
                  htmlFor="UserName"
                  className="text-xs font-semibold px-1"
                >
                  UserName
                </label>
                <div className="flex">
                  <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                    <i className="mdi mdi-email-outline text-gray-400 text-lg"></i>
                  </div>
                  <input
                    type="text"
                    id="uname"
                    name="uname"
                    className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                    placeholder="johnsmith"
                    ref={uname}
                  />
                </div>
              </div>
            </div>
            <div className="flex -mx-3">
              <div className="w-full px-3 mb-5">
                <label htmlFor="role" className="text-xs font-semibold px-1">
                  Role
                </label>
                <div className="flex">
                  <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                    <i className="mdi mdi-account-outline text-gray-400 text-lg"></i>
                  </div>
                  <select
                    id="role"
                    name="role"
                    className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus-border-indigo-500"
                    ref={role}
                  >
                    <option value="user">User</option>
                    <option value="admin">Admin</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="flex -mx-3">
              <div className="w-full px-3 mb-12">
                <label
                  htmlFor="password"
                  className="text-xs font-semibold px-1"
                >
                  Password
                </label>
                <div className="flex">
                  <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                    <i className="mdi mdi-lock-outline text-gray-400 text-lg"></i>
                  </div>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                    placeholder="**"
                    ref={password}
                  />
                </div>
              </div>
            </div>
            <div className="flex -mx-3">
              <div className="w-full px-3 mb-5">
                <button
                  className="block w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold"
                  onClick={submitHandler}
                >
                  LOGIN
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer/>
    </div>
  );
};

export default LoginForm;
