// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";
import Stack from "@mui/material/Stack";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// images
import ra1 from "assets/images/cyber-2377718.jpg"
import ra2 from "assets/images/server-g90d2bb45e_1920.jpg"
import ra3 from "assets/images/bg-sign-in-basic.jpeg"

const CourseItems = [
  {
    title: "Computer Networks",
    description: `Software Major.
    Basics of computer networking.`,
    image: ra1,
  },
  {
    title: "BPP",
    description: `Non-software Major.
    Basics of C language.
    Hi!`,
    image: ra2,
  },
  {
    title: "Problem Solving",
    description: `Software Major.
    PS is fun?`,
    image: ra3,
  },
]

function FeaturesOne() {
  return (
    <MKBox component="section" py={{ xs: 3, md: 12 }}>
        {CourseItems.map((item, index) => (
          (index%2 === 0) ? (
            <Container sx={{mb:10}}>
              <Grid container alignItems="center">
                <Grid item xs={12} lg={6}>
                  <MKTypography variant="h3" my={1}>
                    {item.title}
                  </MKTypography>
                  {item.description.split("\n").map((line, index) => (
                    <MKTypography variant="body2" key={index}>
                      {line}
                    </MKTypography>
                  ))}
                </Grid>  
                <Grid item xs={12} lg={6} sx={{ ml: { xs: -2, lg: "auto" }, mt: { xs: 6, lg: 0 } }}>
                  <MKBox position="relative">
                    <MKBox component="img" src={item.image} alt={item.title} width="100%"/>
                  </MKBox>
                </Grid>
              </Grid>
            </Container>
          ) : (
            <Container sx={{mb:10}}>
              <Grid container alignItems="center">
                <Grid item xs={12} lg={5}>
                  <MKBox position="relative">
                    <MKBox component="img" src={item.image} alt={item.title} width="100%"/>
                  </MKBox>
                </Grid>
                <Grid item xs={12} lg={6} sx={{ ml: { xs: -2, lg: "auto" }, mt: { xs: 6, lg: 0 } }}>
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
          )
        ))}
    </MKBox>
  );

  /*
   
          <Container sx={{mb:10}}>
            <Grid container alignItems="center">
              <Grid item xs={12} lg={6}>
                <MKTypography variant="h3" my={1}>
                  Remote Direct Memory Access
                </MKTypography>
                <MKTypography variant="body2" color="text" mb={2}>
                  Pain is what we go through as we become older. We get insulted by others, lose trust
                  for those others. We get back stabbed by friends. It becomes harder for us to give
                  others a hand.
                </MKTypography>
              </Grid>
              <Grid item xs={12} lg={5} sx={{ ml: { xs: -2, lg: "auto" }, mt: { xs: 6, lg: 0 } }}>
                <MKBox position="relative">
                  <MKBox component="img" src={ra2} alt="macbook" width="100%" />
                </MKBox>
              </Grid>
            </Grid>
          </Container>
    
          <Container sx={{mb:10}}>
            <Grid container alignItems="center">
              <Grid item xs={12} lg={5}>
                <MKBox position="relative">
                  <MKBox component="img" src={ra3} alt="macbook" width="100%" />
                </MKBox>
              </Grid>
              <Grid item xs={12} lg={6} sx={{ ml: { xs: -2, lg: "auto" }, mt: { xs: 6, lg: 0 } }}>
                <MKTypography variant="h3" my={1}>
                  FPGA
                </MKTypography>
                <MKTypography variant="body2" color="text" mb={2}>
                  Pain is what we go through as we become older. We get insulted by others, lose trust
                  for those others. We get back stabbed by friends. It becomes harder for us to give
                  others a hand.
                </MKTypography>
              </Grid>
            </Grid>
          </Container>
        </MKBox>
        */
}

export default FeaturesOne;