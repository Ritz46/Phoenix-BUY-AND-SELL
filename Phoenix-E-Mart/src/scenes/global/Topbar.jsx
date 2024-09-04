import { Box, IconButton, useTheme, Button } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext, tokens } from "../../pages/theme";
import InputBase from "@mui/material/InputBase";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";

const Topbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  return (
    <Box display="flex" justifyContent="space-between" p={2}>
      {/* SEARCH BAR */}
      <Box
        display="flex"
        backgroundColor={colors.primary[400]}
        borderRadius="3px"
      >
        {/* <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />
        <IconButton type="button" sx={{ p: 1 }}>
          <SearchIcon />
        </IconButton> */}
        <Link
          to="/admin/"
          
        >
          {" "}
          <Button color="buttons" style={{ margin: "1rem" }}>
            Dashboard
          </Button>{" "}
        </Link>
        <Link
          to="/admin/team"
          
        >
          {" "}
          <Button color="buttons" style={{ margin: "1rem" }}>
            Team
          </Button>{" "}
        </Link>
        <Link
          to="/admin/calendar"
          
        >
          {" "}
          <Button color="buttons" style={{ margin: "1rem" }}>
            Calendar
          </Button>{" "}
        </Link>
        <Link
          to="/admin/faq"
          
        >
          {" "}
          <Button color="buttons" style={{ margin: "1rem" }}>
            FAQ/Queries
          </Button>{" "}
        </Link>
        <Link
          to="/admin/contacts"
          
        >
          {" "}
          <Button color="buttons" style={{ margin: "1rem" }}>
            Users
          </Button>{" "}
        </Link>
        <Link
          to="/admin/form"
          
        >
          {" "}
          <Button color="buttons" style={{ margin: "1rem" }}>
            Add User
          </Button>{" "}
        </Link>
        <Link
          to="/admin/invoices">
          {" "}
          <Button color="buttons" style={{ margin: "1rem" }}>
            Transaction Invoices
          </Button>{" "}
        </Link>
        <Link
          to="/admin/products">
          {" "}
          <Button color="buttons" style={{ margin: "1rem" }}>
            Products
          </Button>{" "}
        </Link>
      </Box>

      {/* ICONS */}
      <Box display="flex">
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === "dark" ? (
            <DarkModeOutlinedIcon />
          ) : (
            <LightModeOutlinedIcon />
          )}
        </IconButton>
        <IconButton>
          <NotificationsOutlinedIcon />
        </IconButton>
        <IconButton>
          <SettingsOutlinedIcon />
        </IconButton>
        <IconButton>
          <PersonOutlinedIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Topbar;
