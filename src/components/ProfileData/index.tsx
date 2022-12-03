import React from "react";
import { ProfileDataModel } from "../../models/profileDataModel";

import {
  Container,
  Flex,
  Avatar,
  Row,
  PeopleIcon,
  Column,
  CompanyIcon,
  LocationIcon,
  EmailIcon,
} from "./styles";

const ProfileData: React.FC<ProfileDataModel> = ({
  username,
  name,
  avatarUrl,
  followers,
  following,
  company,
  location,
  email,
  blog,
}) => {
  return (
    <Container>
      <Avatar
        src={avatarUrl}
        alt={username}
        style={{
          border: "2px solid",
          padding: 10,
          width: "100%",
          borderRadius: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.05)",
        }}
      />

      <div>
        <h1>{name}</h1>
        <p>{username}</p>
      </div>

      <Row>
        <li>
          <PeopleIcon />
          <b>{followers}</b>
          <span>followers</span>
          <span>·</span>
        </li>
        <li>
          <PeopleIcon />
          <b>{following}</b>
          <span>following</span>
          <span>·</span>
        </li>
      </Row>

      <Column>
        {company && (
          <li>
            <CompanyIcon />
            <span>{company}</span>
          </li>
        )}
        {location && (
          <li>
            <LocationIcon />
            <span>{location}</span>
          </li>
        )}
        {email && (
          <li>
            <EmailIcon />
            <span>{email}</span>
          </li>
        )}
      </Column>
    </Container>
  );
};

export default ProfileData;
