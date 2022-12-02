import { RepoModel } from "../models/repoModel";
import RepoCard from "../components/RepoCard/index";
import { ProfileDataModel } from "../models/profileDataModel";
import ProfileData from "../components/ProfileData/index";

/**
 * Primary UI component for user interaction
 */
export const ProfileDataUI = ({ ...props }: ProfileDataModel) => {
  return <ProfileData {...props}></ProfileData>;
};
