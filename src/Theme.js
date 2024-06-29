import { createTheme } from '@mui/material/';
import { styled } from "@mui/material/styles";
import MuiButton from "@mui/material/Button"

export const colors = {
  primary: "#329c92",
  primaryicons: "#000000d1"
}

export const Theme = createTheme({
  typography: {
    fontFamily: [
      "Poppins",
      "sans-serif"
    ].join(","),
    fontWeight: "500",
    
  },
  palette: {
    primary: { main: "#329c92" },
    secondary: { main: "#ffcc80" },
  },
}

);

export const Button = styled(MuiButton)(({ theme }) => ({
  background: "#329c92",
  borderRadius: "40px",
  boxShadow:"none",
  fontSize: "16px",
  padding:"0.6rem 1.3rem",
  ['&:hover']: {
    background: "#329c92",
    boxShadow:"none"
  },
  [theme.breakpoints.down("md")]: {
    fontSize: "16px"
  }
}));

export const SquareButton = styled(MuiButton)((props) => ({
  background: "#329c92",
  borderRadius: "0px",
  fontSize: "18px",
  ['&:hover']: {
    background: "#329c92",
  }
}));


