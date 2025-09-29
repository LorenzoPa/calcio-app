import React from "react";
import { Card, CardContent, Avatar, Typography, Box } from "@mui/material";


function replaceHtmlEntities(str) {
  return str
    .replace(/&apos;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&egrave;/g, 'è')
    .replace(/&agrave;/g, 'à')
    .replace(/&eacute;/g, 'é')
    ;
}


export default function PlayerCard({ number, name, role, photo }) {
  console.log(name)
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
            src={photo}
            alt={replaceHtmlEntities(name)}
            sx={{ width: 80, height: 80 }}
          >
            {/* Fallback nel caso l'immagine non carichi */}
            {name.charAt(0)}
          </Avatar>
        </Box>
        <Typography variant="h6" gutterBottom>{replaceHtmlEntities(name)}</Typography>
        <Typography variant="body2" color="text.secondary">{role}</Typography>
      </CardContent>
    </Card>
  );
}
