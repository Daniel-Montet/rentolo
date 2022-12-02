import styled from "@emotion/styled";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { Colors } from "../../components/layout/auth.layout.component";

const CssTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "orange",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: Colors.Orange,
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: Colors.Orange,
    },
    "&:hover fieldset": {
      borderColor: "orange",
    },
    "&.Mui-focused fieldset": {
      borderColor: Colors.Orange,
    },
  },
});

const DashboardPage = () => {
  return (
    <Box
      display="flex"
      sx={{
        alignItems: "center",
        minHeight: "45.2vw",
        flexDirection: "column",
        mt: "15rem",
      }}
    >
      <Typography
        component="h1"
        sx={{
          fontSize: "35px",
          color: Colors.FadedBlue,
          fontWeight: "bold",
        }}
      >
        You have no leases yet
      </Typography>
      <Typography
        component="h1"
        sx={{
          fontSize: "35px",
          color: Colors.FadedBlue,
          fontWeight: "bold",
        }}
      >
        Your analytics dashboard will appear here
      </Typography>
      <Grid container spacing={2} sx={{ px: "5rem", mt: "1rem" }}>
        <Grid item xs={4}>
          <CssTextField
            size="small"
            id="outlined-basic"
            label="What equipment are you looking for?"
            variant="outlined"
            sx={{ width: "100%", borderColor: Colors.Orange }}
            color="warning"
          />
        </Grid>
        <Grid item xs={4}>
          <CssTextField
            size="small"
            id="outlined-basic"
            label="What equipment are you looking for?"
            variant="outlined"
            sx={{ width: "100%" }}
          />
        </Grid>
        <Grid item xs={3}>
          <CssTextField
            size="small"
            id="outlined-basic"
            label="Outlined"
            variant="outlined"
            sx={{ width: "100%" }}
          />
        </Grid>
        <Grid item xs={1}>
          <Button
            variant="contained"
            size="small"
            sx={{
              background: Colors.Orange,
              px: "1.5rem",
              height: "100%",
              width: "100%",
            }}
          >
            Search
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default DashboardPage;
