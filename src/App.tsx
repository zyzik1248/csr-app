import { BrowserRouter } from "react-router-dom";
import RouterApp from "./routers/RouterApp";
import { ApolloProvider } from "react-apollo";
import { client } from "./graphql";

function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <RouterApp />
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
