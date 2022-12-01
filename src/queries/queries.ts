import gql from "graphql-tag";

export const GET_CURRENT_USER = gql`
  query GetCurrentUser {
    viewer {
      id
      login
      avatarUrl
      bio
      company
      email
      location
      followers {
        totalCount
      }
      following {
        totalCount
      }
    }
  }
`;

export const REPOSITORY_FRAGMENT = gql`
  fragment repository on Repository {
    id
    name
    url
    descriptionHTML
    primaryLanguage {
      name
    }
    owner {
      login
      url
    }
    stargazers {
      totalCount
    }
    viewerHasStarred
    watchers {
      totalCount
    }
    viewerSubscription
  }
`;

export function SEARCH_IN_REPOSITORIES_OF_CURRENT_USER(
  keyWord: string,
  userName: string
) {
  return gql`
    {
      search(query: "user:${userName} ${keyWord}  in:name ", type: REPOSITORY, first: 10) {
        nodes {
          ... on Repository {
            id
            name
            url
            descriptionHTML
            primaryLanguage {
              name
            }
            owner {
              login
              url
            }
            stargazers {
              totalCount
            }
            forks {
              totalCount
            }
            viewerHasStarred
            watchers {
              totalCount
            }
            viewerSubscription
          }
        }
      }
    }
  `;
}
export const GET_REPOSITORIES_OF_CURRENT_USER = gql`
  query ($cursor: String) {
    viewer {
      repositories(
        first: 10
        orderBy: { direction: DESC, field: STARGAZERS }
        after: $cursor
      ) {
        edges {
          node {
            ...repository
          }
        }
        pageInfo {
          endCursor
          hasNextPage
        }
      }
    }
  }
  ${REPOSITORY_FRAGMENT}
`;
