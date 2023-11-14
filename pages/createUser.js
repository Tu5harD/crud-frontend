import axios from "axios";
import React, { useState } from "react";
import "tailwindcss/tailwind.css";
import { addUser } from "./redux/userSlice";
import { useDispatch } from "react-redux";

const AddDataCard = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();
  const handleAddData = async (e) => {
    e.preventDefault();
    try {
      const userData = { name, email }; // Assuming 'name' and 'email' are defined elsewhere
      const response = await axios.post(
        "http://localhost:3001/createUser",
        userData
      );
      dispatch(addUser(response.data));
      alert("Data is added...!")
    } catch (error) {
      console.error("Error creating user:", error);
    }
  };
  return (
    <div className="max-w-md mx-auto bg-white rounded-md shadow-md p-6">
      <h2 className="text-lg font-semibold mb-4">Add Data</h2>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="name"
        >
          Name
        </label>
        <input
          className="border rounded-md py-2 px-3 text-gray-700 w-full"
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="email"
        >
          Email
        </label>
        <input
          className="border rounded-md py-2 px-3 text-gray-700 w-full"
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleAddData}
      >
        Add
      </button>
    </div>
  );
};

export default AddDataCard;
