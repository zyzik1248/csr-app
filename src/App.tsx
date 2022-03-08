import { BrowserRouter } from "react-router-dom";
import RouterApp from "./routers/RouterApp";
import { ApolloProvider } from "react-apollo";
import { client } from "./graphql";
import { GoMarkGithub } from "react-icons/go";

function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <RouterApp />
        <a
          className="fixed bottom-6 left-6"
          target="_blank"
          rel="noreferrer"
          href="https://github.com/zyzik1248/csr-app"
        >
          <GoMarkGithub className="text-4xl" />
        </a>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
