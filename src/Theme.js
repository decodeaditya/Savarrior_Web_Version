import { createTheme } from '@mui/material';
import { styled } from "@mui/material/styles";
import MuiButton from "@mui/material/Button";

export const Theme = createTheme({
  typography: {
    fontFamily: [
      "Urbanist",
      "sans-serif"
    ].join(","),
    fontWeight: "bold"
  },
 }
);

export const Button = styled(MuiButton)((props) => ({
  background:"#329c92",
  borderRadius:"25px",
  ['&:hover']:{
    background:"#329c92",
  }
}));
