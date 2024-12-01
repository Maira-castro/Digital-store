import React from "react";
import styled from "styled-components";
import { Link, NavLink, useLocation } from "react-router-dom";
import { FaGoogle, FaFacebook } from "react-icons/fa";

const Login = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {" "}
      <div className="flex-grow bg-gradient-to-b from-secundary to-white-color flex items-center justify-center content-center">
        {" "}
        <div className="bg-white-color p-8 rounded-lg shadow-lg w-full max-w-xl mx-16 py-14 ">
          {" "}
          <h1 className="text-2xl font-bold mb-4">Crie sua conta</h1>{" "}
          <h4 className="text-lg mb-4">
            Já possui uma conta?{" "}
            <Link to="/login" className="text-blue-500 underline">
              Entre aqui
            </Link>
          </h4>{" "}
          <input
            type="email"
            placeholder="Email"
            className="border border-gray-300 rounded p-2 mb-4 w-full"
          />{" "}
          <NavLink to="/cadastro" className="block text-center bg-primary text-white-color p-2 rounded hover:bg-tertiary mb-4">
            Criar Conta
          </NavLink>{" "}
          <p className="text-center mb-4">Ou faça login com</p>{" "}
          <div className="flex justify-center space-x-4">
            {" "}
            <button className="flex items-center bg-red-500 text-white p-2 rounded hover:bg-red-600">
              {" "}
              <FaGoogle className="mr-2" /> Google{" "}
            </button>{" "}
            <button className="flex items-center bg-blue-800 text-white p-2 rounded hover:bg-blue-900">
              {" "}
              <FaFacebook className="mr-2" /> Facebook{" "}
            </button>{" "}
          </div>{" "}
        </div>{" "}
        <div className="max-w-full md:hidden xl:block lg:hidden sm:hidden ssm:hidden mx-12">
            <img src="../public/assets/LoginImg.png" alt="" />
        </div>
      </div>{" "}
    </div>
  );
};
export default Login;
