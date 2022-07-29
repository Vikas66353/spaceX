import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import DropdownBox from "./components/dropdown/DropdownBox";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import "antd/dist/antd.css";

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: "https://api.spacex.land/graphql/",
});

function App() {
  return (
      <ApolloProvider client={client}>
        <Navbar />
        <DropdownBox />
      </ApolloProvider>
  );
}

export default App;
