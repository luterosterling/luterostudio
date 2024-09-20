'use client';

import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import NextLink from "next/link";
import ProTip from "@/app/components/ProTip";
import Copyright from "@/app/components/Copyright";
import Rating from "@mui/material/Rating";

export default function About() {
  const [value, setValue] = React.useState<number | null>(2);
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          my: 4,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="h1" sx={{ mb: 10 }}>
          Material UI - Next.js example in TypeScript
        </Typography>
        <Typography variant="h2" sx={{ mb: 2 }}>
          Material UI - Next.js example in TypeScript
        </Typography>
        <Typography variant="h3" sx={{ mb: 2 }}>
          Material UI - Next.js example in TypeScript
        </Typography>
        <Typography variant="h4" sx={{ mb: 2 }}>
          Material UI - Next.js example in TypeScript
        </Typography>
        <Typography variant="h5" sx={{ mb: 2 }}>
          Material UI - Next.js example in TypeScript
        </Typography>
        <Typography variant="h6" sx={{ mb: 2 }}>
          Material UI - Next.js example in TypeScript
        </Typography>
        <Box sx={{ maxWidth: "sm" }}>
          <Button variant="contained" component={NextLink} href="/">
            Go to the home page
          </Button>
        </Box>
        <ProTip />
        <Copyright />
      </Box>
      <Box sx={{ "& > legend": { mt: 2 } }}>
        <Typography component="legend">Controlled</Typography>
        <Rating
          name="simple-controlled"
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        />
        <Typography component="legend">Read only</Typography>
        <Rating name="read-only" value={value} readOnly />
        <Typography component="legend">Disabled</Typography>
        <Rating name="disabled" value={value} disabled />
        <Typography component="legend">No rating given</Typography>
        <Rating name="no-value" value={null} />
      </Box>
    </Container>
  );
}
