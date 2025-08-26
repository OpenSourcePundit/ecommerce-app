import React, { useState, useContext } from "react";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";
import { TbLogout } from "react-icons/tb";
import { CgProfile } from "react-icons/cg";
import "./profile.scss";
import { DataContext } from "../../Contexts/dataContext";
import { AuthContext } from "../../Contexts/authcontext/authcontext";

export const Profile = () => {
  const { dataDispatch, address } = useContext(DataContext);
  const { setIsLogIn } = useContext(AuthContext);

  const [profileTab, setProfileTab] = useState("profile");
  const [editAddress, setEditAddress] = useState(false);
  const [isEdit, setIsEdit] = useState({ status: false, index: null });

  const [formData, setFormData] = useState({
    Add_name: "",
    Hno: "",
    street: "",
    city: "",
    state: "",
    Phone: "",
    Pin: "",
  });

  const handleInputChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const openAddressForm = (obj) => {
    setEditAddress(true);
    setIsEdit(obj);

    if (obj.status) {
      const current = address[obj.index];
      setFormData({ ...current });
    } else {
      setFormData({
        Add_name: "",
        Hno: "",
        street: "",
        city: "",
        state: "",
        Phone: "",
        Pin: "",
      });
    }
  };

  const handleSubmit = () => {
    if (isEdit.status) {
      const updated = [...address];
      updated.splice(isEdit.index, 1, { ...formData });
      dataDispatch({ type: "editAddress", payload: updated });
    } else {
      dataDispatch({ type: "update-address", payload: { ...formData } });
    }
    setEditAddress(false);
  };

  const handleDelete = (index) => {
    const filtered = address.filter((_, ind) => ind !== index);
    dataDispatch({ type: "add-address", payload: filtered });
  };

  const handleLogout = () => {
    setIsLogIn(false);
    ["encodedToken", "email", "password", "name"].forEach((item) =>
      localStorage.removeItem(item)
    );
    dataDispatch({ type: "logout" });
  };

  const getActiveId = ({ isActive }) => ({
    color: "white",
    backgroundColor: isActive ? "#cc9600" : "#af239a",
  });

  return (
    <div className="container">
      {editAddress && (
        <div className="address-container">
          <p className="address-container-heading">Add New Address</p>
          <div className="address">
            {Object.keys(formData).map((field) => (
              <React.Fragment key={field}>
                <label htmlFor={field}>{field} :</label>
                <input
                  type="text"
                  id={field}
                  value={formData[field]}
                  placeholder={`Enter ${field}`}
                  onChange={handleInputChange}
                />
              </React.Fragment>
            ))}
          </div>
          <button type="submit" onClick={handleSubmit}>
            Submit
          </button>
          <button onClick={() => setEditAddress(false)}>Cancel</button>
        </div>
      )}

      <div className="profile-main">
        <div className="button-section">
          <NavLink
            className="profile"
            style={getActiveId}
            onClick={() => setProfileTab("profile")}
          >
            <span>Profile</span>
            <CgProfile className="profile-icon"/>
          </NavLink>
          <NavLink
            className="address"
            style={getActiveId}
            onClick={() => setProfileTab("address")}
          >
            <span>Address</span>
            <FaLocationDot className="profile-icon"/>
          </NavLink>
          <NavLink className="logout" style={getActiveId} onClick={handleLogout}>
            <span>Logout</span>
            <TbLogout className="profile-icon"/>
          </NavLink>
        </div>

        <div className="image-section">
          <div className="image-container">
            <img
              src="https://i.ibb.co/d5tcPjt/profile.png"
              alt="logo"
              width="30"
              height="30"
            />
          </div>
        </div>

        <div className="details-section">
          {profileTab === "profile" ? (
            <div className="profile-container">
              <div className="profile-section">
                <p>
                  Name: <span className="span-name">{localStorage.getItem("name")}</span>
                </p>
                <p>
                  Email: <span>{localStorage.getItem("email")}</span>
                </p>
              </div>
            </div>
          ) : (
            <div className="address-section">
              <div className="add-address">
                <button onClick={() => openAddressForm({ status: false })}>
                   Add New Address
                </button>
              </div>

              {address.map((addr, index) => (
                <div className="address" key={index}>
                  <div className="home">
                    <p>{addr.Add_name},</p>
                    <p>
                      {addr.Hno}, {addr.street}
                    </p>
                    <p>
                      {addr.city}, {addr.state}
                    </p>
                    <p>
                      {addr.Pin}, {addr.Phone}
                    </p>
                  </div>
                  <div className="btn-section">
                    <div
                      style={{ color: "green" }}
                      onClick={() =>
                        openAddressForm({ status: true, index: index })
                      }
                    >
                      <FaEdit />
                    </div>
                    <div
                      onClick={() => handleDelete(index)}
                      style={{ color: "red" }}
                    >
                      <MdDelete />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
