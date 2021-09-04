import "./dashboard.css";

import University from "../../assets/university.png";
import hello from "../../assets/welcome.png";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import Approvers from "../../assets/approvers.png";
import Users from "../../assets/users.png";
import Bar from "../../components/charts/bar";
import Pie from "../../components/charts/Pie";
import { PieChart } from "@material-ui/icons";

import { FcLibrary } from "react-icons/fc";
import { FcApproval } from "react-icons/fc";
import { FcCollaboration } from "react-icons/fc";
import { FcConferenceCall } from "react-icons/fc";
const main = () => {
  return (
    <main>
      <div className="main__container">
        <div className="main__title">
          <img src={hello} alt="hello" />
          <div className="main__greeting">
            <h1>Welcome</h1>
            <p> welcome to dashboard</p>
          </div>
        </div>

        <div className="main__cards">
          <div className="card">
            <i>
              {" "}
              <card>
                <CardMedia />{" "}
              </card>{" "}
            </i>
            <div className="card__inner">
              <FcLibrary size="90px" />
              <p className="text-primary-p">Number of Institute</p>
              <span className="font-bold text-title">140</span>
            </div>
          </div>

          <div className="card">
            <i className="fa fa-approvers-o fa-2x text-yellow"></i>
            <div className="card__inner">
              <i>
                {" "}
                <card />{" "}
              </i>
              <FcApproval size="90px" />
              <p className="text-primary-p">Number of Approvers</p>
              <span className="font-bold text-title">140</span>
            </div>
          </div>
          <div className="card">
            <i>
              {" "}
              <card />{" "}
            </i>
            <div className="card__inner">
              <FcConferenceCall size="90px" />
              <p className="text-primary-p">Number of users</p>
              <span className="font-bold text-title">500</span>
            </div>
          </div>
          <div className="card">
            <i className="fa fa-posts-o fa-2x text-blue"></i>
            <div className="card__inner">
              <FcCollaboration size="90px" />
              <p className="text-primary-p">Number of posts</p>
              <span className="font-bold text-title">950</span>
            </div>
          </div>
        </div>

        <div className="charts">
          <div className="charts__lefttt">
            <div className="charts__left__title">
              <div>
                <h1>Daily reports</h1>

                <p>addisababa, hawassa, bahirdar</p>
              </div>
              <i>
                {" "}
                <card />{" "}
              </i>
            </div>
            <Pie />
          </div>

          <div className="charts__left">
            <div className="pie">
              <div>
                <h1>Daily reports</h1>

                <p>addisababa, hawassa, bahirdar</p>
              </div>
              <i>
                {" "}
                <card />{" "}
              </i>
            </div>
            <Bar />
          </div>
        </div>
      </div>
    </main>
  );
};
export default main;
