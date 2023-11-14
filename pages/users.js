import React, { useEffect, useState } from "react";
import axios from "axios";
import "tailwindcss/tailwind.css";
import { useDispatch, useSelector } from "react-redux";
import { getUser, deleteUser } from "./redux/userSlice";
const UserTable = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);


  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get("http://localhost:3001/userdata");
        dispatch(getUser(response.data));
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUserData();
  }, []);

  const handleDelete = async (id) => {
    try {
       await axios.delete("http://localhost:3001/delete/" + id)
        dispatch(deleteUser({id}))
        .catch(error => {
          console.error("Error deleting user:", error);
          // Handle error or inform the user about the failure
        });
    } catch (error) {
      console.error("Error:", error);
    }
  };
  return (
    <table className="min-w-full divide-y divide-gray-200">
      <thead className="bg-gray-50">
        <tr>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Name
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Email
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Actions
          </th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {users.map((data) => (
          <tr key={data.id}>
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="text-sm text-gray-900">{data.name}</div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="text-sm text-gray-900">{data.email}</div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <button
                onClick={() => handleDelete(data.id)}
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserTable;

// import React, { useEffect, useState } from "react";
// import "tailwindcss/tailwind.css";
// import axios from "axios";
// const UserTable = ({ handleUpdate, handleDelete }) => {
//   // const users = [
//   //   {id: 1, name: "Tushar Dukane", email: "xyz@gmail.com"}
//   // ]

//   // const [users, setUsers] = useState([]);
//   // useEffect(() => {
//   //   const fetchData = async () => {
//   //     try {
//   //       const response = await axios.get("http://localhost:3001/usrdatas");
//   //       setUsers(response.data);
//   //     } catch (error) {
//   //       console.error("Error fetching users:", error);
//   //     }
//   //   };
//   //   fetchData();
//   // }, []);
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     // Replace the URL with the correct API endpoint
//     axios
//       .get("http://localhost:3001/usrdatas") // Assuming it's a valid REST API URL
//       .then((response) => setUsers(response.data))
//       .catch((err) => console.log(err));
//   }, []);
//   return (
//     <table className="min-w-full divide-y divide-gray-200">
//       <thead className="bg-gray-50">
//         <tr>
//           <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//             Name
//           </th>
//           <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//             Email
//           </th>
//           <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//             Actions
//           </th>
//         </tr>
//       </thead>
//       <tbody className="bg-white divide-y divide-gray-200">
//         {users.map((user) => (
//           <tr key={user.id}>
//             <td className="px-6 py-4 whitespace-nowrap">
//               <div className="text-sm text-gray-900">{user.name}</div>
//             </td>
//             <td className="px-6 py-4 whitespace-nowrap">
//               <div className="text-sm text-gray-900">{user.email}</div>
//             </td>
//             <td className="px-6 py-4 whitespace-nowrap">
//               <button
//                 onClick={() => handleUpdate(user.id)}
//                 className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
//               >
//                 Update
//               </button>
//               <button
//                 onClick={() => handleDelete(user.id)}
//                 className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
//               >
//                 Delete
//               </button>
//             </td>
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   );
// };

// export default UserTable;
