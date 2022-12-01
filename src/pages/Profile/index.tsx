import React, { useState } from "react";

import { Container, Main, LeftSide, Tab } from "./styles";
import ProfileData from "../../components/ProfileData";
import useFetch from "../../hooks/customHooks/useFetch";
import { GET_CURRENT_USER } from "../../queries/queries";
import RightSideComponent from "./right_side";
import ErrorComponent from "../../components/ErrorComponent/index";
import Loading from "../../components/Loading";
import { TabContent } from "../../components/TabContent";

const Profile: React.FC = () => {
  const [search, setSearch] = useState("");

  // To be DRY, utilize a custom hook for each API your app loads from, e.g.
  // `GET_CURRENT_USER`.
  const {
    loading: loadingUser,
    error: errorUSer,
    data: dataUser,
  } = useFetch(GET_CURRENT_USER);

  let userViewer = dataUser ? dataUser["viewer"] : null;

  return (
    <Container>
      <Main>
        <LeftSide>
          {loadingUser && <Loading></Loading>}
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
        {errorUSer && <ErrorComponent></ErrorComponent>}
        {userViewer && console.log(userViewer["login"])}
        {userViewer && <RightSideComponent username={userViewer["login"]} />}
      </Main>
    </Container>
  );
};

export default Profile;
