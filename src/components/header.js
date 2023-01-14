import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import WorkspacesIcon from "@mui/icons-material/Workspaces";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from '@mui/material/MenuItem';


export default function Header() {
  const pages = ['Products', 'Pricing', 'Blog'];


  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <WorkspacesIcon sx={{ paddingRight: 2 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            BTPK
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {/* {pages.map((page) => (
              <Button
                key={page}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))} */}
          </Box>
            
          {/* <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton  sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
             
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}

            >
            </Menu>
          </Box> */}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
