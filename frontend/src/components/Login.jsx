import React from "react";

export default function Login() {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="bg-white bg-opacity-70 p-8 sm:p-16 hover:shadow-2xl hover:scale-105 border-2 rounded-lg w-full sm:w-96">
        <h2 className="text-3xl font-bold mb-6 text-center">Login</h2>
        <form>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block mb-2 text-sm text-gray-600 dark:text-gray-400"
            >
              Email Address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter Email Address"
              className="w-full px-4 py-3 rounded-lg border border-gray-200 outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block mb-2 text-sm text-gray-600 dark:text-gray-400"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter Password"
              className="w-full px-4 py-3 rounded-lg border border-gray-200 outline-none focus:border-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 rounded-lg font-semibold transition duration-300 hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  );
}