import "./profile.css";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import EditIcon from "@material-ui/icons/Edit";
import { useHistory } from "react-router-dom";
export default function Profile() {
  const history = useHistory();

  return (
    <div className="profile">
      <div className="profile__header">
        <div className="profile__cover">
          <img className="profile__coverImg" src="assets/post/8.jpeg" alt="" />
          <div className="profile__photo">
            <div className="profile__photo--relative">
              <img
                className="profile__photoImg"
                src="assets/person/6.jpeg"
                alt=""
              />
              <div
                className="profile__photo__editIcon"
                onClick={() => history.push("/profile/edit")}
              >
                <EditIcon />
                <span>Edit</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="profileInfo">
        <h4 className="profileInfoName">Addis Ababa Institute of Technology</h4>
        <span className="profileInfoDesc">
          Seek Wisdom, Elevate Your Intellect and Serve Humanity.
        </span>
      </div>
      <div className="profileRightBottom">
        <Feed />
        <Rightbar />
      </div>
    </div>
  );
}

/* <div className="profileRight">
    <div className="profileRightTop">
        <div className="profileCover">
            <img className="profileCoverImg" src="assets/post/8.jpeg" alt="" />
            <div className="profileUser">
                <img
                    className="profileUserImg"
                    src="assets/person/6.jpeg"
                    alt=""
                />
                <div className="profileRightItem">
                    <EditIcon className="profileRightIcon" />
                    <span className="profileRightIconText">Edit</span>
                </div>
            </div>
        </div>
        <div className="profileInfo">
            <h4 className="profileInfoName">
                Addis Ababa Institute of Technology
            </h4>
            <span className="profileInfoDesc">
                Seek Wisdom, Elevate Your Intellect and Serve Humanity.
            </span>
        </div>
    </div>
    <div className="profileRightBottom">
        <Feed />
        <Rightbar />
    </div>
</div>; */
