import React, { useMemo } from 'react';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default () => {
  const { recipeId } = useParams();
  const reciepQuery = useMemo(
    () => gql`
        {
          recipe(id: ${recipeId}) {
            id
            title
            user {
                id
                name
            }
          }
        }
      `,
    [recipeId]
  );

  const { loading, error, data } = useQuery(reciepQuery);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

  const { id, title, user } = data.recipe;

  return (
    <div key={id}>
      <div>id: {id}</div>
      <p>title: {title}</p>
      <p>
        username: <Link to={`/user/${user.id}`}>{user.name}</Link>
      </p>
    </div>
  );
};
