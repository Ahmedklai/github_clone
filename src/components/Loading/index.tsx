import React from "react";
import { ColorRing } from "react-loader-spinner";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import RepoCard from "../RepoCard/index";
import { Container } from "../RepoCard/styles";
import { Avatar } from "../ProfileData/styles";

interface Props {
  isProfile: boolean;
}

export const LoadingComponent: React.FC<Props> = ({ isProfile }) => {
  return (
    <div>
      {
        <Skeleton
          height={"30px"}
          wrapper={Container}
          width={"60%"}
          highlightColor={"grey"}
          enableAnimation={true}
        />
      }
    </div>
  );
};
