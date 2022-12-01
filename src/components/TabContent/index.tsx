import { RepoIcon } from "../RepoCard/styles";

interface ITabProps {
  numberOfRepos: number;
}
export const TabContent = (props: ITabProps) => (
  <div className="content">
    <RepoIcon />
    <span className="label">Repositories</span>

    <span className="number">{props.numberOfRepos}</span>
  </div>
);
