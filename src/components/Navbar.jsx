import { Avatar, Box, Stack, Typography } from "@mui/material";
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
      background: "#0F0F0F",
      top: 0,
      alignItems: "center",
      justifyContent: "space-between",
      flexDirection: { xs: "column", sm: "row" },
    }}
  >
    <Link to="/" style={{ display: "flex", alignItems: "center" }}>
      <Box>
        <img src={logo} alt="logo" height={30} />
      </Box>
      <Typography
        variant="h5"
        color={"white"}
        fontWeight={"bold"}
        ml={"10px"}
        sx={{ fontSize: { xs: "16px" } }}
      >
        Lumivu
      </Typography>
    </Link>
    <SearchBar />
    <Avatar
      sx={{ display: { xs: "none", sm: "block" }, background: "#0F0F0F" }}
      src="https://www.citypng.com/public/uploads/preview/profile-user-round-red-icon-symbol-download-png-11639594337tco5j3n0ix.png"
    ></Avatar>
  </Stack>
);

export default Navbar;
