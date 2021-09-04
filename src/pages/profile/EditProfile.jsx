import React, { useState } from "react";
import MainContainer from "../../components/shared/MainContainer";
import {
  Breadcrumb,
  BreadcrumbItem,
  Row,
  Col,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { CameraAlt } from "@material-ui/icons";
import "./EditProfile.css";

function EditProfile() {
  const history = useHistory();
  const [coverPhoto, setCoverPhoto] = useState("/assets/post/8.jpeg");
  const [profilePhoto, setProfilePhoto] = useState("/assets/person/6.jpeg");

  return (
    <MainContainer>
      <Breadcrumb>
        <BreadcrumbItem
          onClick={() => history.push("/profile")}
          style={{ cursor: "pointer" }}
        >
          Profile
        </BreadcrumbItem>
        <BreadcrumbItem active>Edit</BreadcrumbItem>
      </Breadcrumb>
      <h3>Edit Profile</h3>
      <div className="mt-4">
        <div className="cover">
          <div className="cover__section">
            <img src={coverPhoto} alt="" className="cover__img" />
            <div className="cover__img__cam">
              <label htmlFor="upload-cover">
                <CameraAlt style={{ cursor: "pointer" }} />
              </label>
              <input
                type="file"
                name="photo"
                id="upload-cover"
                onChange={(e) =>
                  setCoverPhoto(URL.createObjectURL(e.target.files[0]))
                }
              />
            </div>
          </div>
          <div className="profile__pic__section">
            <div className="profile__pic__section--inner">
              <img src={profilePhoto} alt="" className="profile__pic" />
              <div className="profile__pic__cam">
                <label htmlFor="upload-photo">
                  <CameraAlt style={{ cursor: "pointer" }} />
                </label>
                <input
                  type="file"
                  name="photo"
                  id="upload-photo"
                  onChange={(e) =>
                    setProfilePhoto(URL.createObjectURL(e.target.files[0]))
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4">
        <Row xs="1" md="2">
          <Col className="mb-2">
            <FormGroup>
              <Label htmlFor="exampleEmail">Name</Label>
              <Input
                type="email"
                name="email"
                id="exampleEmail1"
                value="Addis Ababa Institute of Technology"
              />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label htmlFor="exampleEmail">Location</Label>
              <Input
                type="email"
                name="email"
                id="exampleEmail2"
                value="Addis Ababa"
              />
            </FormGroup>
          </Col>
        </Row>
        <Row className="mt-4" xs="1" md="2">
          <Col className="mb-2">
            <FormGroup>
              <Label htmlFor="exampleEmail">Email</Label>
              <Input
                type="email"
                name="email"
                id="exampleEmail3"
                value="aait@edu.et"
              />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label htmlFor="exampleEmail">Contact</Label>
              <Input
                type="email"
                name="email"
                id="exampleEmail4"
                value="+251-115-527-713"
              />
            </FormGroup>
          </Col>
        </Row>
        <div className="mt-5 d-flex justify-content-end">
          <Button variant="contained">Submit</Button>
        </div>
      </div>
    </MainContainer>
  );
}

export default EditProfile;
