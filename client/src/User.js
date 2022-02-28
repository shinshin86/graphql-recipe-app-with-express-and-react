import React, { useMemo } from 'react';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import { useParams } from 'react-router-dom';

export default () => {
  const { userId } = useParams();
  const userQuery = useMemo(
    () => gql`
          {
            user(id: ${userId}) {
              id
              name
              email
            }
          }
        `,
    [userId]
  );

  const { loading, error, data } = useQuery(userQuery);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

  const { id, name, email } = data.user;

  return (
    <div key={id}>
      <div>id: {id}</div>
      <p>name: {name}</p>
      <p>email: {email}</p>
    </div>
  );
};
