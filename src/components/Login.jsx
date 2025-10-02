import React, { useState } from "react";
import { TextField, Button, Box, Typography, Container, Alert } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
export default function Login({ setCurrentPage, isLogged, setIsLogged, setUser }) {
    const [formData, setFormData] = useState({
        username: "",
        password: "",
        favorite_team: "",
    })
    const [message, setMessage] = useState("")
    const [success, setSuccess] = useState(false);
    const handleChange = (e) => {
        setFormData({
            ...formData,
            //Lo spread operator copia tutto l’oggetto formData esistente.
            //Serve a non perdere i campi che hai già scritto prima.
            //Senza di questo, ogni volta che cambi un campo, perderesti gli altri.
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch("http://127.0.0.1:8000/auth/token/", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    username: formData.username,
                    password: formData.password,
                }),
            })
            const data = await res.json()

            if (res.ok) {
                // Salvo token JWT
                localStorage.setItem("access", data.access);
                localStorage.setItem("refresh", data.refresh);
                setIsLogged(true);

                setUser({
                    username: formData.username,
                    favoriteTeamLogo: data.favorite_team_logo || null, //se il backend lo restituisce
                })
                setSuccess(true);
                setMessage("Login completato!");

                // opzionale: dopo 2 secondi torno alla home
                setTimeout(() => setCurrentPage("home"), 2000);
            } else {
                setSuccess(false);
                setMessage(data?.error || "Errore durante il login.");
            }

        } catch (error) {
            setSuccess(false);
            setMessage("Errore di connessione al server");
        }
    };

    return (
        <Container maxWidth="xs">
            <Box
                component="form"
                onSubmit={handleSubmit}
                sx={{
                    mt: 8,
                    display: "flex",
                    flexDirection: "column",
                    gap: 2,
                    p: 3,
                    border: "1px solid #ddd",
                    borderRadius: "8px",
                    boxShadow: 2,
                }}>
                <Typography variant="h5" align="center" gutterBottom>
                    Login
                </Typography>

                <TextField
                    label="Username"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    required
                />



                <TextField
                    label="Password"
                    name="password"
                    type="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                />

                <Button type="submit" variant="contained" color="primary">
                    Login
                </Button>

                {message && (
                    <Alert
                        severity={success ? "success" : "error"}
                        icon={success ? <CheckIcon fontSize="inherit" /> : undefined}
                    >
                        {message}
                    </Alert>
                )}
            </Box>
        </Container>
    );
}