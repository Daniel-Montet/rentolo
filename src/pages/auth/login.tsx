import { Button, FormControl, OutlinedInput, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { Colors } from "../../components/layout/auth.layout.component";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <Box
      display="grid"
      gridTemplateColumns="repeat(12, 1fr)"
      gap={0}
      sx={{ minHeight: "100%" }}
    >
      <Box
        gridColumn={{
          gridColumn: "1 / 7",
          gridRow: "1 / 2",
          background: Colors.Orange,
          borderRadius: "1.25rem",
          padding: "5rem",
        }}
      >
        <Grid container spacing={30}>
          <Grid item xs={12}>
            <Typography
              component="h1"
              sx={{
                fontSize: "35px",
                color: Colors.FadedBlue,
                fontWeight: "bold",
              }}
            >
              TOLO
            </Typography>
          </Grid>
          <Grid item xs={8}>
            <Typography
              component="h1"
              sx={{
                fontSize: "35px",
                color: Colors.FadedBlue,
                fontWeight: "bold",
              }}
            >
              <p>WELCOME </p>
              <p>BACK!</p>
            </Typography>
          </Grid>
        </Grid>
      </Box>
      <Box
        gridColumn={{
          gridColumn: "6 / -1",
          gridRow: "1 / 2",
          display: "flex",
          justifyItems: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            background: "white",
            boxShadow: "3px 2px 2px 8px rgba(0, 0, 0, 0.2)",
            minWidth: "90%",
            minHeight: "80%",
            borderRadius: "1.25rem",
            padding: "10rem",
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography
                component="h1"
                sx={{ fontSize: "20px", fontWeight: "bold" }}
              >
                LOGIN
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <FormControl sx={{ width: "100%" }}>
                <label htmlFor="">Email</label>
                <OutlinedInput
                  placeholder="jane@domain.com or 2545635646534"
                  size="small"
                  type="email"
                />
              </FormControl>
            </Grid>

            <Grid item xs={12}>
              <FormControl sx={{ width: "100%" }}>
                <label htmlFor="">Password</label>
                <OutlinedInput
                  placeholder="jane@domain.com or 2545635646534"
                  size="small"
                  type="email"
                />
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <Button
                variant="contained"
                size="small"
                sx={{
                  background: Colors.FadedBlue,
                  px: "1.5rem",
                  width: "100%",
                }}
              >
                Sign In
              </Button>
            </Grid>
            <Grid item xs={12}>
              <Typography
                component="p"
                sx={{ fontSize: "1rem", textAlign: "center" }}
              >
                Don't have an account ?{" "}
                <Link to="/auth/sign-up" className={`text-[#FA9504]`}>
                  Sign Up
                </Link>
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default LoginPage;
