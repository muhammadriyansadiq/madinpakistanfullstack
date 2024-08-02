// import React, { createContext, useContext, useState, useEffect } from 'react';
// import axios from 'axios';

// const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     // Fetch the current user from the backend
//     const fetchUser = async () => {
//       try {
//         const { data } = await axios.get('/api/current-user', { withCredentials: true });
//         setUser(data.data);
//       } catch (error) {
//         console.error('Error fetching current user:', error);
//       }
//     };

//     fetchUser();
//   }, []);

//   return (
//     <AuthContext.Provider value={{ user, setUser }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => useContext(AuthContext);