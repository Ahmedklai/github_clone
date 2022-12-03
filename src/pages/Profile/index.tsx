import React from "react";

import { Container, Main, LeftSide } from "./styles";
import ProfileData from "../../components/ProfileData";
import useFetch from "../../hooks/customHooks/useFetch";
import { GET_CURRENT_USER } from "../../queries/queries";
import RightSideComponent from "./right_side";
import ErrorComponent from "../../components/ErrorComponent/index";
import { LoadingComponent } from "../../components/Loading/index";
import LeftSideComponent from "./left_side";

const Profile: React.FC = () => {
  // To be DRY, utilize a custom hook for each API your app loads from, e.g.
  // `GET_CURRENT_USER`.
  const {
    loading: loadingUser,
    error: errorUSer,
    data: dataUser,
  } = useFetch(GET_CURRENT_USER);

  let userViewer = dataUser ? dataUser["viewer"] : null;
  const loadingProps = {
    // make sure all required component's inputs/Props keys&types match
    isProfile: true,
  };
  return (
    <Container>
      <Main>
        {!errorUSer && (
          <LeftSideComponent
            userViewer={userViewer}
            loadingUser={loadingUser}
          ></LeftSideComponent>
        )}
        {errorUSer && <ErrorComponent></ErrorComponent>}
        {userViewer && console.log(userViewer["login"])}
        {userViewer && <RightSideComponent username={userViewer["login"]} />}
      </Main>
    </Container>
  );
};

export default Profile;
