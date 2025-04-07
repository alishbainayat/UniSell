import React from "react";
import { useLogoutUserMutation } from "../../redux/features/auth/authApi";
import { useDispatch } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { logout } from "../../redux/features/auth/authSlice"; // Ensure logout action is imported

const AdminDashboard = () => {
  const [logoutUser] = useLogoutUserMutation();
  const dispatch = useDispatch();

  const handleLogout = async () => {
    try {
      await logoutUser().unwrap();
      dispatch(logout());
      console.log("Successfully logged out.");
    } catch (err) {
      console.error("Logout failed:", err);
    }
  };

  return (
    <div className="space-y-5 bg-white p-8 md:h-screen flex flex-col justify-between">
      <div>
        <div className="nav__logo">
          <Link to="/">
            UniSell<span>.</span>
          </Link>
          <p className="text-xs italic">Admin Dashboard</p>
        </div>
        <hr className="mt-5" />
        <ul className="space-y-5 pt-5">
          <li>
            <NavLink
              to="/dashboard/admin"
              className={({ isActive }) =>
                isActive ? "text-blue-600 font-bold" : "text-black"
              }
            >
              Admin Dashboard
            </NavLink>
          </li>
          <li>
            {/* <NavLink
              to="/dashboard/admin/users"
              className={({ isActive }) =>
                isActive ? "text-blue-600 font-bold" : "text-black"
              }
            >
              User List
            </NavLink> */}
          </li>
          <li>
            <NavLink
              to="/dashboard/profile"
              className={({ isActive }) =>
                isActive ? "text-blue-600 font-bold" : "text-black"
              }
            >
              Profile
            </NavLink>
          </li>
        </ul>
      </div>
      <div>
        <hr className="mb-3" />
        <button
          onClick={handleLogout}
          className="text-white bg-red-500 font-medium px-5 py-1 rounded-sm"
        >
          Log Out
        </button>
      </div>
    </div>
  );
};

export default AdminDashboard;
