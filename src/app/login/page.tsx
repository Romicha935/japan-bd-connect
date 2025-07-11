"use client";
import { AuthContext } from '@/context/AuthProvider';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useContext, useState } from 'react';
import Swal from 'sweetalert2';
import { FaGoogle } from 'react-icons/fa';

const Login = () => {
  const auth = useContext(AuthContext);
  const router = useRouter();
  const [errorMsg, setErrorMsg] = useState("");

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const email = form.email.value;
    const password = form.password.value;

    if (!auth) return;

    try {
      await auth.signIn(email, password);
      Swal.fire({
        icon: "success",
        title: "Login Successful",
        showConfirmButton: false,
        timer: 1500,
      });
      router.push('/');
    } catch (error: unknown) {
      if (error instanceof Error) {
        setErrorMsg(error.message);
        Swal.fire({
          icon: "error",
          title: "Login Failed",
          text: error.message,
        });
      }
    }
  };

  const handleGoogleLogin = () => {
    if (!auth) return;
    auth.googleSignIn()
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Google Login Success",
          showConfirmButton: false,
          timer: 1500,
        });
        router.push('/');
      })
      .catch((error: Error) => {
        Swal.fire({
          icon: "error",
          title: "Google Login Failed",
          text: error.message,
        });
      });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-400 to-indigo-600 px-4">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Login</h2>
        <form onSubmit={handleLogin} className="flex flex-col gap-4">
          <input
            type="email"
            name='email'
            required
            placeholder="Email"
            className="p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
          <input
            type="password"
            name='password'
            required
            placeholder="Password"
            className="p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
          <button
            type="submit"
            className="bg-indigo-600 cursor-pointer text-white py-3 rounded-md hover:bg-indigo-700 transition"
          >
            Login
          </button>
          {errorMsg && <p className="text-red-500 text-sm text-center">{errorMsg}</p>}
          <p className="text-center text-gray-500 mt-2">or</p>
          <button
            onClick={handleGoogleLogin}
            type="button"
            className="flex items-center cursor-pointer justify-center gap-2 bg-green-500 hover:bg-green-600 text-white py-3 px-4 mt-2 rounded-md w-full transition"
          >
            <FaGoogle /> Continue with Google
          </button>
        </form>
        <p className="mt-4 text-sm text-center text-gray-600">
          Dont have an account? <Link href='/register'><span className="text-indigo-500 underline cursor-pointer">Register</span></Link>
        </p>
      </div>
    </section>
  );
};

export default Login;
