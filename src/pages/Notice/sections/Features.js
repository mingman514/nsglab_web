// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";
import Stack from "@mui/material/Stack";
import Card from "@mui/material/Card";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// images
import ra1 from "assets/images/cyber-2377718.jpg"
import ra2 from "assets/images/server-g90d2bb45e_1920.jpg"
import ra3 from "assets/images/bg-sign-in-basic.jpeg"

const NoticeItems = [
  {
    title: "Call for students",
    description: `If you are looking for a job in the field of computer science, 
    please contact us.
    We are looking for students who are interested in computer science.
    We are looking for students who are interested in computer science.
    We are looking for students who are interested in computer science.`,
  },
  {
    title: "Another Notice",
    description: `Intentionally left blank.`,
  },
]

function FeaturesOne() {
  return (
    <>
        {NoticeItems.map((item, index) => (
          <Card
            sx={{
              p: 2,
              mx: { xs: 2, lg: 3 },
              mt: 4,
              mb: 4,
              backgroundColor: "#eefeee88",
              boxShadow: ({ boxShadows: { xxl } }) => xxl,
            }}
          >
            <MKBox component="section" py={{ xs: 3, md: 12 }}>
              <Container sx={{mb:2}}>
                <Grid container alignItems="flex-start">
                  <Grid>
                    <MKTypography variant="h3" my={1}>
                      {item.title}
                    </MKTypography>
                    {item.description.split("\n").map((line, index) => (
                      <MKTypography variant="body2" key={index}>
                        {line}
                      </MKTypography>
                    ))}
                  </Grid>
                </Grid>
              </Container>
            </MKBox>
          </Card>
        ))}
    </>
  );
}

export default FeaturesOne;