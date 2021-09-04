import React from "react";
import { NavItem, NavLink, Nav } from "reactstrap";
import { Link } from "react-router-dom";
import "./NewSidebar.css";

const NewSidebar = ({ isOpen, toggle }) => (
    <div
        className={`${isOpen ? "sidebar is-open" : "sidebar"}`}
        style={{ backgroundColor: "green" }}
    >
        <div className="sidebar-header">
            <span color="info" onClick={toggle} style={{ color: "#fff" }}>
                &times;
            </span>
            <h3>Bootstrap Sidebar</h3>
        </div>
        <div className="side-menu">
            <Nav vertical className="list-unstyled pb-3">
                <NavItem>
                    <NavLink tag={Link} to={"/manage"}>
                        manage
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink tag={Link} to={"/pages"}>
                        Portfolio
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink tag={Link} to={"/faq"}>
                        FAQ
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink tag={Link} to={"/contact"}>
                        Contact
                    </NavLink>
                </NavItem>
            </Nav>
        </div>
    </div>
);

export default NewSidebar;
