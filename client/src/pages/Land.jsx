import React from "react";
import { Link } from "react-router-dom";

function Land() {
  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen"
      style={{
        backgroundImage:
          "url('https://static.vecteezy.com/system/resources/previews/008/014/115/non_2x/tropical-leaves-background-design-summer-leaves-flat-illustration-simple-banner-with-copy-space-free-vector.jpg')",
        backgroundSize: "cover",
      }}
    >
      <h1 className="text-4xl font-bold text-center mb-8">
        Welcome to LocalBizz
      </h1>
      <div className="flex space-x-4">
        <Link to="/signup" className="px-4 py-2 text-white bg-blue-500 rounded">
          Sign Up
        </Link>
        <Link to="/login" className="px-4 py-2 text-white bg-blue-500 rounded">
          Login
        </Link>
      </div>
    </div>
  );
}

export default Land;
