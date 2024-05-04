import React, { useEffect } from "react";
import { getUserInfo } from "../apicalls/users";
import { message } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { SetUser } from "../redux/usersSlice";

function ProtectedRoute({ children }) {
  const { user } = useSelector((state) => state.users);

  const dispatch = useDispatch();

  const getUserData = async () => {
    try {
      const response = await getUserInfo();
      if (response.success) {
        message.success(response.message);
        dispatch(SetUser(response.data));
      } else {
        message.error(response.message);
      }
    } catch (error) {
      message.error(error.message);
    }
  };

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <div className="layout">
      <div className="flex gap-2">
        <div className="sidebar">Sidebar</div>
        <div className="body">
          <div className="header flex justify-between">
            <i className="ri-close-line"></i>
            <h1 className="text-2xl">Quiz App</h1>
            <h1 className="text-xl">{user?.name}</h1>
          </div>
          <div className="content">{children}</div>
        </div>
      </div>
    </div>
  );
}

export default ProtectedRoute;
