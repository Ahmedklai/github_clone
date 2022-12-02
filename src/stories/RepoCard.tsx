import { RepoModel } from "../models/repoModel";
import RepoCard from "../components/RepoCard/index";

/**
 * Primary UI component for user interaction
 */
export const RepoCardUi = ({ ...props }: RepoModel) => {
  return <RepoCard {...props}></RepoCard>;
};
