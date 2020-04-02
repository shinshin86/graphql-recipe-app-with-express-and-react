import React, { useMemo } from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './Header'
import RecipeList from './RecipeList';
import User from './User.js'
import Recipe from './Recipe.js'

const App = () => {
  const client = useMemo(
    () => new ApolloClient({ uri: "http://localhost:4000/graphql" }),
    []
  );

  return (
    <div className="App">
      <ApolloProvider client={client}>
        <div>
        <Router>
          <Header />
          <Switch>
            <Route exact path='/' component={RecipeList} />
            <Route path='/user/:userId' component={User} />
            <Route path='/recipe/:recipeId' component={Recipe} />
          </Switch>
          </Router>          
        </div>
      </ApolloProvider>
    </div>
  );
};

export default App;
