"use client";

import { Typography } from "@mui/material";

export default function Logo() {
  const animationDuration = 8;
  return (
    <Typography
      sx={(theme) => {
        return {
          fontFamily: "var(--font-neonderthaw)",
          fontWeight: 400,
          color: theme.palette.primary.main,
          animation: `glow ${animationDuration}s infinite`,
        };
      }}
      variant="h1"
    >
      Lutero Studio
    </Typography>
  );
}