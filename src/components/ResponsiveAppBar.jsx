import * as React from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Avatar,
  Button,
  Tooltip,
  MenuItem,
  Switch,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';

function ResponsiveAppBar({
  vociMenu,
  darkMode,
  setDarkMode,
  vociProfilo,
  setCurrentPage,
  isLogged,
  setIsLogged,
  username,
  favoriteTeamLogo,
  setUser
}) {
  const theme = useTheme();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => setAnchorElNav(event.currentTarget);
  const handleCloseNavMenu = () => setAnchorElNav(null);

  const handleOpenUserMenu = (event) => setAnchorElUser(event.currentTarget);
  const handleCloseUserMenu = () => setAnchorElUser(null);

  return (
    <AppBar position="static" color="primary">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Logo Desktop */}
          <SportsSoccerIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
              cursor: "pointer"
            }}
            onClick={() => setCurrentPage("home")}
          >
            CALCIO
          </Typography>

          {/* Menu Mobile */}
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="menu"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorElNav}
              anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
              keepMounted
              transformOrigin={{ vertical: "top", horizontal: "left" }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: "block", md: "none" } }}
            >
              {vociMenu.map((page) => (
                <MenuItem
                  key={page.title}
                  onClick={() => {
                    setCurrentPage(page.dest);
                    handleCloseNavMenu();
                  }}
                >
                  <Typography textAlign="center">{page.title}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* Logo Mobile */}
          <SportsSoccerIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="div"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
              cursor: "pointer"
            }}
            onClick={() => setCurrentPage("home")}
          >
            Il Mio Calcio
          </Typography>

          {/* Menu Desktop */}
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {vociMenu.map((page) => (
              <Button
                key={page.title}
                onClick={() => setCurrentPage(page.dest)}
                sx={{ my: 2, color: "inherit", display: "block" }}
              >
                {page.title}
              </Button>
            ))}
          </Box>

          {/* Toggle Dark Mode */}
          <Switch
            checked={darkMode}
            onChange={() => setDarkMode(!darkMode)}
            color="default"
          />

          {/* Utente */}
          <Box sx={{ flexGrow: 0, display: "flex", alignItems: "center", gap: 1 }}>
            {isLogged && (
              <Typography variant="body1" sx={{ mr: 1 }}>
                {username}
              </Typography>
            )}
            <Tooltip title="Apri impostazioni">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                {isLogged ? (
                  favoriteTeamLogo ? (
                    <Avatar alt={username} src={favoriteTeamLogo} />
                  ) : (
                    <Avatar>{username?.charAt(0).toUpperCase()}</Avatar>
                  )
                ) : (
                  <Avatar alt="User" src="/static/images/avatar/2.jpg" />
                )}
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              anchorEl={anchorElUser}
              anchorOrigin={{ vertical: "top", horizontal: "right" }}
              keepMounted
              transformOrigin={{ vertical: "top", horizontal: "right" }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {!isLogged
                ? [
                  <MenuItem
                    key="login"
                    onClick={() => {
                      handleCloseUserMenu();
                      setCurrentPage("login");
                    }}
                  >
                    <Typography textAlign="center">Login</Typography>
                  </MenuItem>,
                  <MenuItem
                    key="register"
                    onClick={() => {
                      handleCloseUserMenu();
                      setCurrentPage("register");
                    }}
                  >
                    <Typography textAlign="center">Registrazione</Typography>
                  </MenuItem>,
                ]
                : [
                  <MenuItem
                    key="profile"
                    onClick={() => {
                      handleCloseUserMenu();
                      setCurrentPage("profile");
                    }}
                  >
                    <Typography textAlign="center">Profilo</Typography>
                  </MenuItem>,
                  <MenuItem
                    key="logout"
                    onClick={() => {
                      handleCloseUserMenu();
                      setCurrentPage("home");
                      setIsLogged(false);
                      setUser({})
                      // qui aggiungi anche il reset: setIsLogged(false), setUser({})
                    }}
                  >
                    <Typography textAlign="center">Logout</Typography>
                  </MenuItem>,
                ]}

            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;
