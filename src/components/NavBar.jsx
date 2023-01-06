import React from "react";
import style from "./navBar.module.css";

import Button from "@mui/material/Button";
import { TextField } from "@mui/material";
import Stack from "@mui/material/Stack";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

function NavBar({ changeCategory, set }) {
  const handleChange = (e) => {
    set(e.target.value);
    // changeCategory();
  };

  const catergories = [
    "business",
    "entertainment",
    "general",
    "health",
    "science",
    "sports",
    "technology",
  ];

  return (
    <div className={style.nav}>
      <Stack direction="row" spacing={2}>
        <Button variant="outlined" onClick={() => window.location.reload()}>
          Home
        </Button>
        <TextField
          className={style.search}
          size="small"
          id="outlined-basic"
          label="Search"
          variant="outlined"
        />
        {catergories &&
          catergories.map((e) => {
            return (
              <button value={e} onClick={handleChange}>
                {e}
              </button>
            );
          })}
      </Stack>
    </div>
  );
}

export default NavBar;
