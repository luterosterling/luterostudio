"use client";

import { Container } from "@mui/material";
import Logo from '@/app/components/Logo';

export default function Header() {
  return (
    <Container 
      maxWidth="lg"
      sx={{
        display: 'flex',
        justifyContent: 'center',
        my: 4
      }}
    >
      <Logo />
    </Container>
  );
}