import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
  HttpLink,
  InMemoryCache,
} from "@apollo/client";
import React from "react";
import Profile from ".";
import { GITHUB_BASE_URL } from "../../constant/constants";

// We used this Component to wrap the Profile with the Apollo Provider which
// is basically Similar to React's Context.Provider, ApolloProvider wraps your
//React app and places Apollo Client on the context, enabling you to access it
//from anywhere in your component tree.

const ProfileProvider: React.FC = () => {
  //GETTING THE GITHUB BASE URL
  const url = GITHUB_BASE_URL;

  //GETTING THE SESSION STORAGE TOKEN
  // We used sessionStorage is similar to localStorage ; the difference is
  // that while data in localStorage doesn't expire, data in sessionStorage
  //is cleared when the page session ends.
  var token = sessionStorage.getItem("token");

  const httpLink = new HttpLink({
    uri: url,
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
  const link = ApolloLink.from([httpLink]);

  const cache = new InMemoryCache();

  const client = new ApolloClient({
    link,
    cache,
  });
  return (
    // we need to initialize ApolloClient, passing its constructor a configuration object with the uri and cache fields.
    <ApolloProvider client={client}>
      <Profile />
    </ApolloProvider>
  );
};

export default ProfileProvider;
