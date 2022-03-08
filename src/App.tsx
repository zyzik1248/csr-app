import { HashRouter } from "react-router-dom";
import RouterApp from "./routers/RouterApp";
import { ApolloProvider } from "react-apollo";
import { GoMarkGithub } from "react-icons/go";

import { client } from "./graphql";

function App() {
  return (
    <ApolloProvider client={client}>
      <HashRouter basename={"/"}>
        <RouterApp />
        <a
          className="fixed bottom-6 left-6"
          target="_blank"
          rel="noreferrer"
          href="https://github.com/zyzik1248/csr-app"
        >
          <GoMarkGithub className="text-4xl" />
        </a>
      </HashRouter>
    </ApolloProvider>
  );
}

export default App;
