import React, { useMemo } from "react";
import { gql } from 'apollo-boost';
import { useQuery } from "@apollo/react-hooks";
import {
    Link
  } from "react-router-dom";

export default  () => {
    const allRecipesQuery = useMemo(
      () => gql`
        {
          allRecipes {
            id
            title
            user {
              id
              name
            }
          }
        }
      `,
      []
    );
  
    const { loading, error, data } = useQuery(allRecipesQuery);
  
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error</p>;
  
    return data.allRecipes.map(({ id, title, user }) => (
      <div key={id}>
        <p>title: <Link to={`/recipe/${id}`}>{title}</Link></p>
        <p>user: <Link to={`/user/${user.id}`}>{user.name}</Link></p>
      </div>
    ));
  };
  