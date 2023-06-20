/**
=========================================================
* Material Kit 2 React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";

import EmailIcon from '@mui/icons-material/Email';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import ModeIcon from '@mui/icons-material/Mode';

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

function HorizontalTeamCard({ image, name, position, email, topic }) {
  return (
    <Card sx={{ mt: 3 }}>
      <Grid container>
        <Grid item xs={12} md={6} lg={4} sx={{ mt: -6 }}>
          <MKBox width="100%" pt={2} pb={1} px={2}>
            <MKBox
              component="img"
              src={image}
              alt={name}
              width="100%"
              borderRadius="md"
              shadow="lg"
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} md={6} lg={8} sx={{ my: "auto" }}>
          <MKBox pt={{ xs: 1, lg: 2.5 }} pb={2.5} pr={4} pl={{ xs: 4, lg: 1 }} lineHeight={1}>
            <MKTypography variant="h5">{name}</MKTypography>
            <MKTypography component="span" variant="body2" color={position.color} mb={1} fontWeight="medium" >
              {position.status}
            </MKTypography>
            <MKTypography component="span" variant="body2" color="text" fontWeight="light" ml={1}>
              ({position.date})
            </MKTypography>
            <Grid container mt={1.5}>
              <Grid item xs={12}>
                <ModeIcon fontSize="small" color="text" sx={{verticalAlign: "middle"}} />
                <MKTypography variant="body2" component="span" color="text" ml={1}>
                  {topic}
                </MKTypography>
              </Grid>
              <Grid item xs={12}>
                <EmailIcon fontSize="small" color="text" sx={{verticalAlign: "middle"}} />
                <MKTypography variant="body2" component="span" color="text" ml={1}>
                  {email}
                </MKTypography>
              </Grid>
            </Grid>
          </MKBox>
        </Grid>
      </Grid>
    </Card>
  );
}

// Typechecking props for the HorizontalTeamCard
HorizontalTeamCard.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  position: PropTypes.shape({
    color: PropTypes.oneOf([
      "primary",
      "secondary",
      "info",
      "success",
      "warning",
      "error",
      "dark",
      "light",
    ]),
    status: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
  }).isRequired,
};

export default HorizontalTeamCard;
