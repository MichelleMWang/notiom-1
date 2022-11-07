import React from 'react';
import { useUser } from '@auth0/nextjs-auth0';
import {
    Container, 
    Heading, Image
    
} from "@chakra-ui/react";

export default function Profile() {
  const { user, error, isLoading } = useUser();

  if (isLoading) return (<Container>Loading...</Container>);
  if (error) return (<Container>{error.message}</Container>);

  return (
    user && (
      <Container>
        <Image src={user.picture} alt={user.name} />
        <Heading>{user.name}</Heading>
        <Container>{user.email}</Container>
      </Container>
    )
  );
}