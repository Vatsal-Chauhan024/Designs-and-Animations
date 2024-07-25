import React, { useState } from "react";
import { BsFillPersonFill } from "react-icons/bs";
import { AiFillLock } from "react-icons/ai";

const LoginComponent = () => {

    const [name, setName] = useState('')
    const [passWord, setPassWord] = useState('')

    const handleName = (e) =>{
        setName(e.target.value);
    }

    const handlePassword = (e) =>{
        setPassWord(e.target.value);
    }
  return (
    <div className="min-w-screen min-h-screen flex justify-center items-center">
      <div className="mainCard w-96 bg-white h-[60vh] overflow-hidden rounded-sm shadow-2xl">
        <div className="greenCard bg-green-600 text-white h-28 flex items-center justify-center">
          <h1 className="text-2xl font-medium">Login Form</h1>
        </div>

        <div className="inputFields flex flex-col gap-4 h-fit mt-16 items-center ">
          <div className="fields flex">
            <div className="greenDiv h-9 w-9 bg-green-400 flex items-center justify-center rounded-l-md">
              <BsFillPersonFill className="text-white"/>
            </div>
            <input
              type="text"
              value={name}
              onChange={handleName}
              placeholder='Name'
              className="border-r-2 border-t-2 border-b-2 border-gray-300 rounded-r-sm w-56 outline-green-400 px-2 "
            />
          </div>

          <div className="fields flex">
            <div className="greenDiv h-9 w-9 bg-green-400 flex items-center justify-center rounded-l-md">
              <AiFillLock className="text-white" />
            </div>
            <input
              type="text"
              value={passWord}
              onChange={handlePassword}
              placeholder="Password"
              className="border-r-2 border-t-2 border-b-2 border-gray-300 rounded-r-sm w-56 outline-green-400 px-2 "
            />
          </div>
        </div>

        <div className="forget ml-16 mt-2 cursor-pointer">
            <span className="forgetPass text-green-500 font-medium tracking-wide  hover:text-green-300"> Forget Password?</span>
        </div>

        <div className="loginButton flex justify-center mt-5 px-14">
            <button className="h-8 bg-green-500 text-white hover:bg-green-400  rounded-sm outline-none w-full px-10">Login</button>
        </div>

        <div className="footerLink flex justify-center mt-6">
            <span className="text-black">Not a member?</span><span className="text-green-500">Signup now</span>
        </div>

      </div>
    </div>
  );
};

export default LoginComponent;
