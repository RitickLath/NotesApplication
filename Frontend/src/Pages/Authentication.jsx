import React, { useState } from "react";

const Authentication = () => {
  const [isUser, setIsUser] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    
  };

  return (
    <div className="flex justify-center items-center min-h-[90vh] ">
      <div className="shadow-lg rounded-lg p-8 w-full max-w-md ">
        <h1 className="text-center pb-6 text-2xl font-semibold lg:text-3xl">
          {isUser ? "Log in" : "Sign Up"}
        </h1>
        <form onSubmit={handleSubmit}>
          {/* For Sign-Up Only */}
          {!isUser && (
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium ">
                Name
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                className="mt-1 block outline-none text-black w-full border border-gray-300 rounded-md px-4 py-2"
                required={!isUser}
              />
            </div>
          )}

          {/* Common Email and password */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="mt-1 block outline-none text-black w-full rounded-md px-4 py-2"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium ">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="mt-1 block outline-none text-black w-full rounded-md px-4 py-2"
              required
            />
          </div>

          {/* Confirm Password for Sign-Up */}
          {!isUser && (
            <div className="mb-4">
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium "
              >
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm your password"
                className="mt-1 block outline-none text-black w-full rounded-md px-4 py-2"
                required={!isUser}
              />
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition"
          >
            {isUser ? "Log in" : "Sign Up"}
          </button>
        </form>

        <p className="text-center py-4">
          {isUser ? "Don't have an account? " : "Already have an account? "}
          <button
            className="text-blue-600 font-semibold"
            onClick={() => setIsUser(!isUser)}
          >
            {isUser ? "Sign Up" : "Log in"}
          </button>
        </p>
      </div>
    </div>
  );
};

export default Authentication;
