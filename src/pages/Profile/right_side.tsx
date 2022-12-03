import React, { useState } from "react";
import { RightSide, Repos, Tab, SearchForm } from "./styles";
import RepoCard from "../../components/RepoCard";
import useFetch from "../../hooks/customHooks/useFetch";
import { SEARCH_IN_REPOSITORIES_OF_CURRENT_USER } from "../../queries/queries";
import { TabContent } from "../../components/TabContent";
import LoadingComponent from "../../components/Loading/index";
import GitHubCalendar from "react-github-calendar";

interface IRightSideProps {
  username: string;
}
const RightSideComponent: React.FC<IRightSideProps> = ({ username }) => {
  //Search text state
  const [search, setSearch] = useState("");

  //The Response from the GraphQl API
  // To be DRY, utilize a custom hook for each API your app loads from, e.g.
  // `SEARCH_IN_REPOSITORIES_OF_CURRENT_USER`.
  const {
    loading,
    error: errorSearch,
    data,
  } = useFetch(SEARCH_IN_REPOSITORIES_OF_CURRENT_USER(search, username));

  let error = errorSearch !== undefined;
  let edges: any[] = data ? data["search"]["nodes"] : null;

  return (
    <div>
      {!error && (
        <RightSide>
          <Tab className="desktop">
            <div className="wrapper">
              <span className="offset" />
              {!error && (
                <TabContent numberOfRepos={edges ? edges.length : 0} />
              )}
            </div>

            <span className="line" />
          </Tab>
          <Repos>
            <SearchForm
              style={{
                border: "2px ",
                padding: 10,
                marginTop: "20px",
                borderRadius: 15,
                backgroundColor: "rgba(0, 0, 0, 0.05)",
              }}
            >
              <input
                placeholder="Enter Repo Name ..."
                value={search}
                onChange={(value: any) => setSearch(value.currentTarget.value)}
              />
            </SearchForm>
            {loading && <div> {<LoadingComponent />}</div>}

            {!loading && !error && (
              <div>
                {edges.map((repo: any) => (
                  <RepoCard
                    id={repo["id"]}
                    url={repo["url"]}
                    name={repo["name"]}
                    owner={repo["owner"]["login"]}
                    descriptionHTML={repo["descriptionHTML"]}
                    primaryLanguage={
                      repo["primaryLanguage"]
                        ? repo["primaryLanguage"]["name"]
                        : null
                    }
                    updatedAt={repo["updatedAt"]}
                    stargazers={repo["stargazers"]["totalCount"]}
                    forks={repo["forks"]["totalCount"]}
                    isStory={false}
                  />
                ))}
              </div>
            )}
          </Repos>

          <GitHubCalendar
            style={{ paddingTop: "50px", paddingBottom: "20px" }}
            username={username}
          />
        </RightSide>
      )}
    </div>
  );
};

export default RightSideComponent;
