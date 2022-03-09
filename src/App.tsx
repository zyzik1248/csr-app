import { BrowserRouter, HashRouter } from "react-router-dom";
import RouterApp from "./routers/RouterApp";
import { ApolloProvider } from "react-apollo";
import { GoMarkGithub } from "react-icons/go";

import { client } from "./graphql";

function App() {
  return (
    <ApolloProvider client={client}>
      {process.env.NODE_ENV === "development" ? (
        <BrowserRouter>
          <RouterApp />
        </BrowserRouter>
      ) : (
        <HashRouter basename="/">
          <RouterApp />
        </HashRouter>
      )}
      <a
        className="fixed bottom-6 left-6"
        target="_blank"
        rel="noreferrer"
        href="https://github.com/zyzik1248/csr-app"
      >
        <GoMarkGithub className="text-4xl" />
      </a>
    </ApolloProvider>
  );
}

export default App;
