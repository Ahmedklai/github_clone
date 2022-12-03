import React from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Topside,
  RepoIcon,
  Botside,
  StarIcon,
  ForkIcon,
  Wrapper,
} from "./styles";
import { RepoModel } from "../../models/repoModel";

const RepoCard: React.FC<RepoModel> = ({
  id,
  name,
  url,
  descriptionHTML,
  primaryLanguage,
  owner,
  stargazers,
  forks,
  isStory,
  updatedAt,
}) => {
  const languageClass = primaryLanguage
    ? primaryLanguage.toLowerCase()
    : "other";

  return (
    <Container>
      <Topside>
        <header>
          <RepoIcon />
          {!isStory && <Link to={`/profile`}>{name}</Link>}
          {isStory && <h4>{name}</h4>}
          <div
            style={{
              border: "2px solid grey",
              padding: 5,
              margin: 10,
              borderRadius: 10,
              backgroundColor: "grey",
            }}
          >
            <span style={{ color: "white" }}>public</span>
          </div>
        </header>
        <Wrapper>
          <div
            style={{ width: "70%" }}
            dangerouslySetInnerHTML={{ __html: descriptionHTML }}
          ></div>
          <div
            style={{
              border: "2px solid",
              padding: 10,
              borderRadius: 15,
              backgroundColor: "rgba(0, 0, 0, 0.05)",
            }}
          >
            <StarIcon />
            <span> Star</span>
          </div>
        </Wrapper>
      </Topside>

      <Botside>
        <ul>
          <li>
            <div className={`language ${languageClass}`} />
            <span>{primaryLanguage}</span>
          </li>
          <li>
            <StarIcon />
            <span>{stargazers}</span>
          </li>
          <li>
            <ForkIcon />
            <span>{forks}</span>
          </li>
          <li>
            <span>Updated On {updatedAt.split("T")[0]}</span>
          </li>
        </ul>
      </Botside>
    </Container>
  );
};

export default RepoCard;
