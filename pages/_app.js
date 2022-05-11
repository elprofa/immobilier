import { ApolloProvider } from "@apollo/client";
import { useApollo } from "../apollo/client";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "../containers/Layout";
import { ThemeProvider } from "styled-components";
import { theme } from "../theme";
import "../vendor/bootstrap-select/dist/css/bootstrap-select.min.css";
import "../public/styles/style.css";



function App({ Component, pageProps,apollo}) {
  const apolloClient = useApollo(pageProps.initialApolloState);
  //console.log(apollo);
  return (
    <ApolloProvider client={apolloClient}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
    </ApolloProvider>
  );
}

export default App;