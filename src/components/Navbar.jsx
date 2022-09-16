import { Box, Stack } from "@mui/material";
// import zIndex from "@mui/material/styles/zIndex";
import { Link } from "react-router-dom";

import { logo } from "../utils/constants";
import { SearchBar } from "./";

const Navbar = () => (
  <Stack
    direction="row"
    alignItems="center"
    p={2}
    sx={{
      position: "sticky",
      background: "#2803fc",
      top: 0,
      justifyContent: "space-between",
      zIndex: "2",
    }}
  >
    <Link to="/" style={{ display: "flex", alignItems: "center" }}>
      <img style={{ borderRadius: "20px" }} src={logo} alt="logo" height={45} />
      <Box
        style={{
          color: "white",
          marginLeft: "5px",
          fontWeight: "bold",
          fontSize: "28px",
          fontFamily: "cursive",
        }}
      >
        Edutube
      </Box>
    </Link>
    <SearchBar />
  </Stack>
);

export default Navbar;
