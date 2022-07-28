import React from 'react';
import logo from './logo.svg';
import './App.css';
import Main_Table from "./components/mainTable/Main_Table"
import {ApolloClient,InMemoryCache,ApolloProvider} from "@apollo/client"

const client=new ApolloClient({
  cache:new InMemoryCache(),
  uri:"https://api.spacex.land/graphql/"
})

function App() {
  return (
    <ApolloProvider client={client}>
      <Main_Table/>
    </ApolloProvider>
  );
}

export default App;
