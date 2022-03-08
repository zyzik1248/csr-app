import { ApolloClient } from "apollo-client";
import { createHttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";

const link = createHttpLink({
  uri: "https://countries.trevorblades.com",
});

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link,
});
