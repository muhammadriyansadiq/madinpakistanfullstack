// import React from 'react';
// import { Route, useNavigate } from 'react-router-dom';
// // import { useAuth } from './AuthContext';
// import { useAuth } from './AuthProvider';
// const PrivateRoute = ({ component: Component, roles, ...rest }) => {
//   const { user } = useAuth();
//   const naviagte = useNavigate()
//   return (
//     <Route
//       {...rest}
//       render={props =>
//         user && roles.includes(user.role) ? (
//           <Component {...props} />
//         ) : (
//           naviagte('/login')
//         )
//       }
//     />
//   );
// };

// export default PrivateRoute;