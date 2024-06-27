"use client";

import {useRouter} from "next/navigation";
import React from "react";

const Modal = () => {
  const {push} = useRouter();

  const onClose = () => {
    push("/");
  };

  const onLogin = () => {
    push("/login");
  };

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 shadow-lg w-80">
        <h2 className="text-xl font-bold mb-4 text-center">Login Required</h2>

        <p className="mb-6 text-center">
          You need to log in to download the image.
        </p>

        <div className="flex justify-center gap-6">
          <button
            className="bg-gray-300 text-gray-700 w-1/2 px-4 py-2 rounded-xl"
            onClick={onClose}
          >
            Go back
          </button>

          <button
            className="bg-blue-500 text-white px-4 py-2 w-1/2 rounded-xl mr-2"
            onClick={onLogin}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
