import React from "react";
import { Card, CardContent, Avatar, Typography, Box } from "@mui/material";

export default function PlayerCard({ number, name, role }) {
  return (
    <Card
      sx={{
        height: "250px",
        width: "200px",
        textAlign: "center",
        borderRadius: 3,
        p: 2,
        border: 1,
        borderColor: "divider",
        boxShadow: 3,
        transition: "0.3s",
        "&:hover": { boxShadow: 6 },
        bgcolor: "background.paper",
        color: "text.primary",
      }}
    >
      <CardContent>
        <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
          <Avatar
            sx={{ width: 80, height: 80, bgcolor: "primary.main", fontSize: 24, fontWeight: "bold" }}
          >
            {number}
          </Avatar>
        </Box>
        <Typography variant="h6" gutterBottom>{name}</Typography>
        <Typography variant="body2" color="text.secondary">{role}</Typography>
      </CardContent>
    </Card>
  );
}
