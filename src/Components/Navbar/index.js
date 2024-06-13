import * as React from "react";
import { AppBar, Box, Toolbar, Typography } from "@mui/material";

const NavBar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ bgcolor: "#2E3B55" }}>
        <Toolbar variant="dense">
          <Typography
            variant="h5"
            color="inherit"
            component="div"
            sx={{ py: 2, pl: 3 }}
          >
            Interview System
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
