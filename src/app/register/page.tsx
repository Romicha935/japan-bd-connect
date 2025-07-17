
"use client";
export const dynamic = 'force-dynamic';
import React, { useContext } from "react";
import { AuthContext } from "@/context/AuthProvider";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";
import { FaGoogle } from "react-icons/fa";

const Register = () => {
  const auth = useContext(AuthContext);
  const router = useRouter();

  const handleRegister = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    
    const elements = form.elements as typeof form.elements & {
      name: HTMLInputElement;
      email: HTMLInputElement;
      password: HTMLInputElement;
      confirmPassword: HTMLInputElement;
    };

    // const name = elements.name.value;
    const email = elements.email.value;
    const password = elements.password.value;
    const confirmPassword = elements.confirmPassword.value;

    if (password !== confirmPassword) {
      Swal.fire({
        icon: "warning",
        title: "Passwords do not match",
      });
      return;
    }

    if (password.length < 6) {
      Swal.fire({
        icon: "warning",
        title: "Password must be at least 6 characters",
      });
      return;
    }

    auth
      ?.createUser(email, password)
      .then(() => {
        Swal.fire({ 
          icon: "success",
          title: "Registration Successful",
          showConfirmButton: false,
          timer: 1500,
        });
        form.reset();
        router.push("/login");
      })
      .catch((error: Error) => {
        Swal.fire({
          icon: "error",
          title: "Registration Failed",
          text: error.message,
        });
      });
  };

  const handleGoogleRegister = () => {
    auth
      ?.googleSignIn()
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Google Login Success",
          showConfirmButton: false,
          timer: 1500,
        });
        router.push("/");
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
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-400 to-pink-500 px-4">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Create an Account
        </h2>
        <form onSubmit={handleRegister} className="flex flex-col gap-4">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            required
            className="p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400"
          />
          <input
            type="email"
            name="email"
            required
            placeholder="Email Address"
            className="p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400"
          />
          <input
            type="password"
            name="password"
            required
            placeholder="Password"
            className="p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400"
          />
          <input
            type="password"
            name="confirmPassword"
            required
            placeholder="Confirm Password"
            className="p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400"
          />
          <button
            type="submit"
            className="bg-pink-600 hover:cursor-pointer text-white py-3 rounded-md hover:bg-pink-700 transition"
          >
            Register
          </button>
          <p className="text-center text-gray-500 mt-2">or</p>
          <button
            onClick={handleGoogleRegister}
            type="button"
            className="flex items-center cursor-pointer justify-center gap-2 bg-green-500 hover:bg-green-600 text-white py-3 px-4 mt-2 rounded-md w-full transition"
          >
            <FaGoogle /> Continue with Google
          </button>
        </form>
        <p className="mt-4 text-sm text-center text-gray-600">
          Already have an account?{" "}
          <span
            onClick={() => router.push("/login")}
            className="text-pink-500 underline cursor-pointer"
          >
            Login
          </span>
        </p>
      </div>
    </section>
  );
};

export default Register;
