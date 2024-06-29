import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Paper, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const onhandleSubmit = (e) => {
    e.preventDefault();

    if (searchTerm) {
      navigate(`/search/${searchTerm}`);

      setSearchTerm("");
    }
  };

  return (
    <Paper
      component="form"
      onSubmit={onhandleSubmit}
      sx={{
        borderRadius: 20,
        border: "1px solid #525252",
        pl: 2,
        boxShadow: "none",
        mr: { sm: 5 },
        background: "transparent",
        width: { xs: "auto", sm: "60%" },
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <input
        style={{ background: "transparent", color: "white" }}
        className="search-bar"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <IconButton
        type="submit"
        sx={{ p: { xs: "5px", sm: "8px" }, color: "white" }}
        aria-label="search"
      >
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
