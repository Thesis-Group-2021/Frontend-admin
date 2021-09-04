import "./sidebar.css";

import DashboardIcon from "@material-ui/icons/Dashboard";
// import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import GroupIcon from "@material-ui/icons/Group";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import PersonIcon from "@material-ui/icons/Person";
import { NavLink } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import React from "react";
import manageapprover from "../../pages/manageusers/manageapprover";
import ManageUsers from "../../pages/manageusers/ManageUsers";
import manageexternaluser from "../../pages/manageusers/manageexternaluser";

import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";

import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

export default function Sidebar({ isOpen, toggle }) {
  {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
      setAnchorEl(null);
    };

    return (
      <div className={`${isOpen ? "sidebar is-open" : "sidebar"}`}>
        <img src="assets/logo/erhLogo2.jpeg" alt="" className="sidebar__logo" />
        <div>
          <ul className="sidebarList">
            <NavLink
              as="li"
              to="/dashboard"
              className="sidebarListItem"
              activeClassName="active"
            >
              <DashboardIcon className="sidebarIcon" />
              <span className="sidebarListItemText">Dashboard</span>
            </NavLink>

            <NavLink
              as="li"
              to="/profile"
              className="sidebarListItem"
              activeClassName="active"
            >
              <PersonIcon className="sidebarIcon" />
              <span className="sidebarListItemText">Profile</span>
            </NavLink>
            <li className="sidebarListItem">
              <GroupIcon className="sidebarIcon" />
              <span>
                <span aria-haspopup="true" onClick={handleClick}>
                  Manage
                </span>
                <Menu
                  anchorEl={anchorEl}
                  s
                  keepMounted
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                >
                  <MenuItem onClick={handleClose}>
                    <NavLink as="li" to="/manage">
                      Manage
                    </NavLink>
                  </MenuItem>
                  <MenuItem onClick={handleClose}>Approver</MenuItem>
                  <MenuItem onClick={handleClose}>
                    <NavLink as="li" to="/manageexternaluser">
                      External User
                    </NavLink>
                  </MenuItem>
                  <MenuItem onClick={handleClose}>
                    <NavLink as="li" to="/managedepartment">
                      Departments
                    </NavLink>
                  </MenuItem>
                </Menu>
              </span>
            </li>

            <li className="sidebarListItem">
              <ExitToAppIcon className="sidebarIcon" />
              <span className="sidebarListItemText">Logout</span>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
