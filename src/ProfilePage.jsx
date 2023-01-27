import React from 'react'
import { useAuth } from './auth';

const ProfilePage = () => {
  const auth = useAuth();
  
  return (
    <>
      <p>ProfilePage</p>

      <h1>{auth.user ? `Hola ${auth.user.username}!` : `Inicia sesion!`}</h1>
    </>
  );
};
export { ProfilePage };
