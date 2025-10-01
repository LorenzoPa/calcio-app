import React, { useState } from "react";
import { TextField, Button, Box, Typography, Container } from "@mui/material";

export default function RegisterForm() {
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
    })
    const [message, setmessage] = useState("")

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch("http://127.0.0.1:8000/auth/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            })
            const data = await res.json()

            if (res.ok) {
                setMessage("Registrazione completata")
            } else {
                setMessage(data.error || "Errore durante la registrazione");
            }

        } catch (error) {
            setMessage("Errore di connessione al server")
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
                    Registrati
                </Typography>

                <TextField
                    label="Username"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    required
                />

                <TextField
                    label="Email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
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
                    Registrati
                </Button>

                {message && (
                    <Typography align="center" color="secondary">
                        {message}
                    </Typography>
                )}
            </Box>
        </Container>
    );
}