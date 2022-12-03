import { DocumentNode, useQuery } from "@apollo/client";

const useFetch = (query: DocumentNode) => {
  // The query is not just a string; we need to use `gql` from `graphql-tag`. The
  // special comment before the string allows editor syntax highlighting, Prettier
  // formatting and linting. The cache system doesn’t require `__typename` or `id`
  // fields to be queried.

  const { loading, error, data } = useQuery(query);

  return { loading: loading, error: error, data: data };
};

export default useFetch;
