import React from "react";
import { Link } from "react-router-dom";
import { ChipSet, Chip } from "@material/react-chips";
import "@material/react-chips/dist/chips.css";
import {
  Container,
  Topside,
  RepoIcon,
  Botside,
  StarIcon,
  ForkIcon,
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
}) => {
  const languageClass = primaryLanguage
    ? primaryLanguage.toLowerCase()
    : "other";

  return (
    <Container>
      <Topside>
        <header>
          <RepoIcon />
          <Link to={`/${owner}/${name}`}>{name}</Link>
          <Chip label="Public" />
        </header>

        <div dangerouslySetInnerHTML={{ __html: descriptionHTML }}></div>
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
        </ul>
      </Botside>
    </Container>
  );
};

export default RepoCard;
