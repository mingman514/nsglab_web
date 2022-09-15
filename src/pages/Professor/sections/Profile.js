/*
=========================================================
* Material Kit 2 React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKAvatar from "components/MKAvatar";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";
import { Link } from "react-router-dom";

// Custom page
import Experience from "pages/Professor/sections/Experience";

// Images
import prof from "assets/images/yhkim.jpg";

function Profile() {
  return (
    <MKBox component="section" py={{ xs: 6, sm: 12 }}>
      <Container sx={{mb: 7}}>
        <Grid container item xs={12} justifyContent="center" mx="auto">
          {/* <MKBox mt={{ xs: -16, md: -20 }} textAlign="center">
            <MKAvatar src={profilePicture} alt="Burce Mars" size="xxl" shadow="xl" />
          </MKBox> */}
          <Grid container justifyContent="space-around">
            <Grid item xs={6} md={3}>
              <MKBox position="relative">
                <MKBox component="img" src={prof} alt="professor" width="100%" />
              </MKBox>
            </Grid>
            <Grid item xs={12} md={7} mx={{ xs: "auto", sm: 6, md: 1 }}>
              <MKBox display="flex" justifyContent="space-between" alignItems="center" mb={1}>
                <MKTypography variant="h3">Young Hoon Kim</MKTypography>
                {/* <MKButton variant="outlined" color="info" size="small">
                  Follow
                </MKButton> */}
              </MKBox>
              <Grid container spacing={0} mb={1}>
                <Grid item xs={12}>
                  <MKTypography component="span" variant="body2" color="success" fontWeight="bold">
                    Assistant Professor
                  </MKTypography>
                </Grid>
                <Grid item xs={12} sx={{ mb: -1.5 }}>
                  <MKTypography component="span" variant="body2" color="text" fontWeight="light">
                      College of Computing and Informatics
                  </MKTypography>
                </Grid>
                <Grid item xs={12}>
                  <MKTypography component="span" variant="body2" color="text" fontWeight="light">
                    Sungkyunkwan University
                  </MKTypography>
                </Grid>
                <Grid item xs={12} sx={{ mb: -1 }}>
                  <MKTypography component="span" variant="body2" color="text" fontWeight="bold">
                    Tel
                  </MKTypography>
                  <MKTypography component="span" variant="body2" color="text" fontWeight="light">
                    : +82-31-290-7977
                  </MKTypography>
                </Grid>
                <Grid item xs={12}>
                  <MKTypography component="span" variant="body2" color="text" fontWeight="bold">
                    E-mail
                  </MKTypography>
                  <MKTypography component="span" variant="body2" color="text" fontWeight="light">
                    : yhoon@skku.edu
                  </MKTypography>
                </Grid>
                <Grid item xs={12} sx={{ mb: -1 }}>
                  <MKTypography component="span" variant="body2" color="text" fontWeight="bold">
                  Address
                  </MKTypography>
                </Grid>
                <Grid item xs={12} sx={{ mb: -1 }}>
                <MKTypography component="span" variant="body2" color="text" fontWeight="light">
                 : 1st Engineering Building #23111, Sungkyunkwan University,
                 </MKTypography>
                </Grid>
                <Grid item xs={12}>
                <MKTypography component="span" variant="body2" color="text" fontWeight="light">
                2066, Seobu-ro, Jangan-gu, Suwon-si, Gyeonggi-do, Korea
                 </MKTypography>
                 </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>

      <Container>
        <Grid container item xs={12} justifyContent="center" mx="auto">
          <Grid item xs={12} lg={6} sx={{ mb: 7 }}>
            <MKTypography component="span" variant="h4">
            Interests
            </MKTypography>
            <Grid item xs={12} m={3}>
              <MKTypography component="span" variant="body2" color="text" fontWeight="light">
                <li>operating systems</li>
                <li>parallel and distributed computing</li>
                <li>GPU clusters and HPC data centers</li>
                <li>TCP network stack</li>
              </MKTypography>
              <MKTypography
                  component="a"
                  href="research-area"
                  variant="body1"
                  fontWeight="light"
                  color="info"
                  fontSize="medium"
                  mt={1}
                  sx={{
                    width: "max-content",
                    display: "flex",
                    alignItems: "center",

                    "& .material-icons-round": {
                      transform: `translateX(3px)`,
                      transition: "transform 0.2s cubic-bezier(0.34, 1.61, 0.7, 1.3)",
                    },

                    "&:hover .material-icons-round, &:focus .material-icons-round": {
                      transform: `translateX(6px)`,
                    },
                  }}
                >
                  More <Icon fontSize="small" sx={{ fontWeight: "bold" }}>arrow_forward</Icon>
                </MKTypography>
            </Grid>
          </Grid>

          <Grid item xs={12} lg={6} sx={{ mb: 7 }}>
            <MKTypography component="span" variant="h4">
            Education
            </MKTypography>
            <Grid item xs={12} m={3}>
              <MKTypography component="span" variant="body2" color="text" fontWeight="light">
                <li>Seoul Science High School, KAIST, 2000</li>
                <li>B.S in Department of Computer Science, KAIST, 2004</li>
                <li>Ph.D in Department of Computer Science, KAIST, 2015</li>
              </MKTypography>
            </Grid>
          </Grid>

          <Grid item xs={12} sx={{ mb: -1 }}>
            <MKTypography component="span" variant="h4">
              Experience
            </MKTypography>
            <Grid item xs={12} m={3}>
              <MKTypography component="span" variant="body2" color="text" fontWeight="light">
                <Experience />
              </MKTypography>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Profile;
