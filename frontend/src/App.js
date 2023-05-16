/**
=========================================================
* Material Kit 2 React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-reaact
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import { useEffect } from "react";

// react-router components
import { Routes, Route, Navigate, useLocation } from "react-router-dom";

// @mui material components
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

// Material Kit 2 React themes
import theme from "assets/theme";
// import Presentation from "layouts/pages/presentation";
import Home from "pages/Home"
import Introduction from "pages/Introduction"
import ResearchArea from "pages/ResearchArea"
import Professor from "pages/Professor"
import Students from "pages/Students"
import Author from "pages/LandingPages/Author"
import Notice from "pages/Notice";
import Papers from "pages/Papers";
import Contact from "pages/Contact";

// Material Kit 2 React routes
// import routes from "routes";

export default function App() {
  const { pathname } = useLocation();

  // Setting page scroll to 0 when changing the route
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  }, [pathname]);

  const getRoutes = (allRoutes) =>
    allRoutes.map((route) => {
      if (route.collapse) {
        return getRoutes(route.collapse);
      }

      if (route.route) {
        return <Route exact path={route.route} element={route.component} key={route.key} />;
      }

      return null;
    });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Routes>
        {/* {getRoutes(routes)} */}
        {/* <Route path="/presentation" element={<Presentation />} /> */}
        {/* <Route path="*" element={<Navigate to="/presentation" />} /> */}
        <Route path="/" element={<Home />} />
        <Route path="/introduction" element={<Introduction />} />
        <Route path="/research-area" element={<ResearchArea />} />
        <Route path="/professor" element={<Professor />} />
        <Route path="/students" element={<Students />} />
        <Route path="/author" element={<Author />} />
        <Route path="/papers" element={<Papers />} />
        <Route path="/notice" element={<Notice/>} />
        <Route path="/contact" element={<Contact />} />
</Routes>
    </ThemeProvider>
  );
}
