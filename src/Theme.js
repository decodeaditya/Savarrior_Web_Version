import { createTheme } from '@mui/material';
import { styled } from "@mui/material/styles";
import MuiButton from "@mui/material/Button";

export const colors = {
  primary:"#329c92",
  primaryicons:"#006e64"
}

export const Theme = createTheme({
  typography: {
    fontFamily: [
      "Urbanist",
      "sans-serif"
    ].join(","),
    fontWeight: "800"
  },
 }
);

export const Button = styled(MuiButton)((props) => ({
  background:"#329c92",
  borderRadius:"25px",
  fontSize:"16px",
  ['&:hover']:{
    background:"#329c92",
  }
}));

export const SquareButton = styled(MuiButton)((props) => ({
  background:"#329c92",
  borderRadius:"0",
  fontSize:"16px",
  ['&:hover']:{
    background:"#329c92",
  }
}));

