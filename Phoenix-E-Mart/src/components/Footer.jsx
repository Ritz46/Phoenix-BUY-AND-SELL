// import * as React from 'react';
// import CssBaseline from '@mui/material/CssBaseline';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
// import Box from '@mui/material/Box';
// import Typography from '@mui/material/Typography';
// import Container from '@mui/material/Container';
// import Link from '@mui/material/Link';

// function Copyright() {
//   return (
//     <Typography variant="body2" color="text.secondary">
//       {'Copyright © '}
//       <Link color="inherit" href="https://mui.com/">
//         PHOENIX E-MART
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }

// // TODO remove, this demo shouldn't need to reset the theme.
// const defaultTheme = createTheme();

// export default function StickyFooter() {
//   return (
//     <ThemeProvider theme={defaultTheme}>
//       <Box
//         sx={{
//           display: 'flex',
//           flexDirection: 'column',
//           minHeight: '10vh',
//         }}
//       >
//         <CssBaseline />
//         <Container component="main" sx={{ mt: 8, mb: 2 }} maxWidth="sm">
//           {/* <Typography variant="h2" component="h1" gutterBottom>
//             Sticky footer
//           </Typography>
//           <Typography variant="h5" component="h2" gutterBottom>
//             {'Pin a footer to the bottom of the viewport.'}
//             {'The footer will move as the main element of the page grows.'}
//           </Typography> */}
//           {/* <Typography variant="body1">Sticky footer placeholder.</Typography> */}
//         </Container>
//         <div style={{backgroundColor:"purple"}}>

//         <Box
//           component="footer"
//           sx={{
//             py: 3,
//             px: 2,
//             mt: 'auto',
//             // backgroundColor: (theme) =>
//             //   theme.palette.mode === 'light'
//             //     ? theme.palette.grey[200]
//             //     : theme.palette.grey[800],
//           }}
//         >
//           <Container maxWidth="sm">
//             <Typography variant="body1">
//               My sticky footer can be found here.
//             </Typography>
//             <Copyright />
//           </Container>
//         </Box>
//         </div>
//       </Box>
//     </ThemeProvider>
//   );
// }

import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="waves">
        <div
          className="wave"
          id="wave1"
          style={{ backgroundColor: "#242424" }}
        ></div>
        <div
          className="wave"
          id="wave2"
          style={{ backgroundColor: "#242424" }}
        ></div>
        <div
          className="wave"
          id="wave3"
          style={{ backgroundColor: "#242424" }}
        ></div>
        <div
          className="wave"
          id="wave4"
          style={{ backgroundColor: "#242424" }}
        ></div>
      </div>
      <ul className="socials">
        <li>
          <a href="">
            <img
              className="socials_img"
              src="instagram.png"
              alt="instagramlogo"
            />
          </a>
        </li>
        <li>
          <a href="">
            <img className="socials_img" src="twitter.png" alt="twitterlogo" />
          </a>
        </li>
        <li>
          <a href="">
            <img
              className="socials_img"
              src="facebook.png"
              alt="facebooklogo"
            />
          </a>
        </li>
        <li>
          <a href="">
            <img
              className="socials_img"
              src="linkedin.png"
              alt="linkedinlogo"
            />
          </a>
        </li>
      </ul>
      <div className="brandname">
        <div>
          <img className="logo_img" src="logo.png" alt="Brand Logo" />
        </div>
        <div className="brandrights">© 2023 PHOENIX E-MART, Inc.</div>
      </div>
    </footer>
  );
};

export default Footer;
