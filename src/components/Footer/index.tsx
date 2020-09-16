import React from "react";
import { Typography, Link } from "@material-ui/core";

interface FooterProps {}

export const Footer: React.FC<FooterProps> = ({}) => {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
};

export default Footer;
