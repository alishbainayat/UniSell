// import React from "react";
// import { useSelector } from "react-redux";
// import { Navigate, useLocation } from "react-router-dom";

// const PrivateRoute = ({ children, allowedRoles }) => {
//   const { user } = useSelector((state) => state.auth);
//   const location = useLocation();

//   // Redirect to login if the user is not authenticated
//   if (!user) {
//     return <Navigate to="/login" state={{ from: location }} replace />;
//   }

//   // Redirect to unauthorized if the user role is not allowed
//   if (allowedRoles && !allowedRoles.includes(user.role)) {
//     return <Navigate to="/unauthorized" replace />;
//   }

//   // Log unauthorized access attempts for security auditing
//   if (process.env.NODE_ENV === "production") {
//     console.error(`Unauthorized access attempt: ${user.email} - ${user.role}`);
//   }

//   return children;
// };

// export default PrivateRoute;
