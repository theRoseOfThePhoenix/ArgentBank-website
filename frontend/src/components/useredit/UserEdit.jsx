// @ts-nocheck
import React, { useState, useEffect } from "react";
import GreenButton from "../greenbtn/GreenBtn";
import { useDispatch, useSelector } from "react-redux";
import {
  updateUserName,
  fetchUserProfile,
} from "../../redux/actions/userActions";

import "./_userEdit.scss";

const UserEdit = () => {
  const dispatch = useDispatch();
  const userProfile = useSelector((state) => state.profile.userProfile);
  const [newUserName, setNewUserName] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const tokenLocal = localStorage.getItem("token");
    const tokenSession = sessionStorage.getItem("token");

    if (tokenLocal || tokenSession) {
      dispatch(fetchUserProfile());
    }
  }, [dispatch]);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleUpdateUserName = async () => {
    if (newUserName) {
      dispatch(updateUserName(newUserName));
      setIsEditing(false);
      setNewUserName("");
    }
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  return (
    <div className="edit-form">
      {isEditing ? (
        <>
          <h1 className="welcome-user">Edit User Infos</h1>
          <div className="edit">
            <label htmlFor="newUserName">User Name :</label>
            <input
              type="text"
              id="newUserName"
              placeholder={userProfile.userName}
              value={newUserName}
              onChange={(e) => setNewUserName(e.target.value)}
            />
          </div>
          <div className="edit">
            <label htmlFor="firstName">First Name :</label>
            <input
              type="text"
              id="firstName"
              value={userProfile.firstName}
              disabled
              className="text_input"
            />
          </div>
          <div className="edit">
            <label htmlFor="lastName">Last Name :</label>
            <input
              type="text"
              id="lastName"
              value={userProfile.lastName}
              disabled
              className="text_input"
            />
          </div>
          <div className="buttons-form">
            <GreenButton text="Save" onClick={handleUpdateUserName} />;
            <GreenButton text="Cancel" onClick={handleCancel} />;
          </div>
        </>
      ) : (
        <div className="edit-form ">
          <h1 className="welcome-user">
            Welcome back <br></br> {userProfile.userName} !
          </h1>
          <GreenButton text="Edit Name" onClick={handleEditClick} />;
        </div>
      )}
    </div>
  );
};

export default UserEdit;
