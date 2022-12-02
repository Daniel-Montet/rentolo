import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import Toolbar from "@mui/material/Toolbar";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { Colors } from "./auth.layout.component";
import Avatar from "@mui/material/Avatar";
import Divider from "@mui/material/Divider";
import ForumRoundedIcon from "@mui/icons-material/ForumRounded";
import NotificationsRoundedIcon from "@mui/icons-material/NotificationsRounded";
import LanguageRoundedIcon from "@mui/icons-material/LanguageRounded";

const drawerWidth = 240;

export default function Header() {
  return (
    <AppBar
      position="fixed"
      sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
    >
      <Toolbar sx={{ background: "white", color: "black" }}>
        <Grid container spacing={2}>
          <Grid item xs={7} sx={{ display: "flex", alignItems: "center" }}>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ fontSize: "14px" }}
            >
              Good Afternoon Mr.John Doe
            </Typography>
          </Grid>
          <Grid
            item
            xs={5}
            sx={{
              display: "flex",
              gap: 3,
              justifyContent: "end",
              alignItems: "center",
            }}
          >
            <Button
              variant="contained"
              size="small"
              sx={{
                background: Colors.Orange,
                px: "1.5rem",
                height: "2.2rem",
              }}
            >
              Become a merchant
            </Button>
            <LanguageRoundedIcon fontSize="small" sx={{ color: "lightGray" }} />
            <ForumRoundedIcon fontSize="small" sx={{ color: "lightGray" }} />
            <NotificationsRoundedIcon
              fontSize="small"
              sx={{ color: "lightGray" }}
            />
            <Divider orientation="vertical" flexItem />
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ fontSize: "14px" }}
            >
              John Doe
            </Typography>
            <Avatar
              sx={{
                height: "2.2rem",
                width: "2.2rem",
              }}
              alt="Cindy Baker"
              src="https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHJhbmRvbSUyMHBlb3BsZXxlbnwwfHwwfHw%3D&w=1000&q=80"
            />
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}
