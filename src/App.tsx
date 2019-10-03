import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import About from "./pages/About";
import Home from "./pages/Home";
import CreateListing from "./pages/CreateListing";
import Proposal from "./pages/Proposal";
import Proposals from "./pages/Proposals";
import Applications from "./pages/Applications";
import Application from "./pages/Application";
import Services from "./pages/Services";
import Service from "./pages/Service";
import Infrastructure from "./pages/Infrastructure";
import InfrastructureSingle from "./pages/InfrastructureSingle";
import Content from "./pages/Content";
import ContentSingle from "./pages/ContentSingle";
import ENS from "./pages/ENS";

import StyledLink from "./components/presentational/StyledLink";

import { ApolloProvider } from "@apollo/react-hooks";
import ApolloClient from "apollo-boost";

import { ThemeProvider } from "emotion-theming";
import theme from "./theme";

import { Box, Flex, Text } from "rebass";

const client = new ApolloClient({
  uri: "https://api.thegraph.com/subgraphs/name/ensdomains/ens"
});

function AppRouter() {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <Router>
          <div>
            <Flex px={2} color="white" bg="black" alignItems="center">
              <Text p={2} fontWeight="bold" color="primary">
                <StyledLink to="/">Everest</StyledLink>
              </Text>
              <Box mx="auto" />
              <StyledLink to="/create-listing">Create a listing</StyledLink>
              <StyledLink to="/proposals">View proposals</StyledLink>
              <StyledLink to="/about">About</StyledLink>
              <StyledLink to="/ens">ENS names</StyledLink>
            </Flex>
            <header>
              <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/create-listing/" component={CreateListing} />
                {/* Note: Proposal must be before proposals */}
                <Route path="/proposals/:slug" component={Proposal} />
                <Route path="/proposals/" component={Proposals} />
                {/* Note: Application must be before applications */}
                <Route path="/applications/:slug" component={Application} />
                <Route path="/applications/" component={Applications} />
                <Route path="/services/:slug" component={Service} />
                <Route path="/services/" component={Services} />
                <Route
                  path="/infrastructure/:slug"
                  component={InfrastructureSingle}
                />
                <Route path="/infrastructure/" component={Infrastructure} />
                <Route path="/content/:slug" component={ContentSingle} />
                <Route path="/content/" component={Content} />
                <Route path="/about/" component={About} />
                <Route path="/ens/" component={ENS} />
              </Switch>
            </header>
          </div>
        </Router>
      </ThemeProvider>
    </ApolloProvider>
  );
}

export default AppRouter;
