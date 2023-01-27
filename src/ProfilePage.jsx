import React from 'react'
import { useAuth } from './auth';

const ProfilePage = () => {
  const auth = useAuth();
  
  return (
    <>
      <p>ProfilePage</p>

      <h1>{`Hola ${auth.user.username}!`}</h1>
    </>
  );
};
export { ProfilePage };
