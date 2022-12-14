import Box from "@mui/material/Box";
import { Outlet } from "react-router-dom";

export enum Colors {
  Orange = "#FA9504",
  FadedBlue = "#43425D",
  DarkBlue = "#2c2b3c",
  BrightBlue = "#6963cf",
}

export default function AuthLayout() {
  return (
    <Box
      sx={{
        height: "100vh",
        width: "100vw",
        // padding: "5rem 25rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Outlet />
    </Box>
  );
}
