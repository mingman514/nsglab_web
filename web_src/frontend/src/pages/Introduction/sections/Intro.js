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

function Intro() {
  return (
    <MKBox component="section" py={{ xs: 6, sm: 12 }}>
      <Container>
        <Grid container item xs={12} justifyContent="center" mx="auto">
          <Grid container justifyContent="space-around">
            <Grid item xs={12} md={12} mx={{ xs: "auto", sm: 6, md: 1 }}>
              <MKBox display="flex" justifyContent="space-between" alignItems="center" mb={1}>
                <MKTypography variant="h3">Welcome to Netsys Lab.</MKTypography>
              </MKBox>
              <MKTypography variant="body1" fontWeight="light" color="text">
                Dolor labore ut cillum nisi enim aliquip Lorem aute cupidatat Lorem aliquip velit. <b>Officia tempor nisi</b> culpa et incididunt fugiat ex. Sit elit dolore laboris proident incididunt. <br />
                Velit dolore ut tempor nisi aute tempor amet ex elit. Elit ut ullamco aliquip quis laborum velit. Duis ipsum mollit ut officia mollit elit ex amet reprehenderit dolor. Ullamco sit ipsum labore quis ex. <br />
              </MKTypography>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Intro;
