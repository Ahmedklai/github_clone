import React, { useState } from "react";
import { RightSide, Repos, Tab, SearchForm, LeftSide } from "./styles";
import RepoCard from "../../components/RepoCard";
import useFetch from "../../hooks/customHooks/useFetch";
import { SEARCH_IN_REPOSITORIES_OF_CURRENT_USER } from "../../queries/queries";
import { TabContent } from "../../components/TabContent";
import { LoadingComponent } from "../../components/Loading/index";
import GitHubCalendar from "react-github-calendar";
import { ApolloError } from "@apollo/client";
import ProfileData from "../../components/ProfileData";

interface IRightSideProps {
  userViewer: any;
  loadingUser: boolean;
}
const LeftSideComponent: React.FC<IRightSideProps> = ({
  userViewer,
  loadingUser,
}) => {
  return (
    <LeftSide>
      {loadingUser && <LoadingComponent isProfile={false}></LoadingComponent>}
      {!loadingUser && userViewer && (
        <div>
          <ProfileData
            username={userViewer["bio"]}
            name={userViewer["login"]}
            avatarUrl={userViewer["avatarUrl"]}
            followers={userViewer["followers"]["totalCount"]}
            following={userViewer["following"]["totalCount"]}
            company={userViewer["company"] ?? "MVST"}
            location={userViewer["location"] ?? "TUNIS, El KEF"}
            email={userViewer["email"] ?? "ahmed@mvst.de"}
            blog={"simple blog Link"}
          />
        </div>
      )}
    </LeftSide>
  );
};

export default LeftSideComponent;
