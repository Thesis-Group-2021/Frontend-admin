import SearchIcon from "@material-ui/icons/Search";
import NotificationsIcon from "@material-ui/icons/Notifications";
import MenuIcon from "@material-ui/icons/MenuOutlined";
import Badge from "@material-ui/core/Badge";
import "./topbar.css";

export default function Topbar({ toggleSidebar }) {
    return (
        <div className="topbarContainer">
            <div
                style={{ cursor: "pointer", marginRight: "auto" }}
                onClick={toggleSidebar}
            >
                <MenuIcon />
            </div>
            <div className="searchbar">
                <SearchIcon className="searchIcon" />
                <input className="searchInput" />
            </div>
            <Badge badgeContent={4} color="secondary">
                <NotificationsIcon />
            </Badge>
        </div>
    );
}
