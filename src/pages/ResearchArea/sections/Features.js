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

function FeaturesOne() {
  return (
    <MKBox component="section" py={{ xs: 3, md: 12 }}>
      <Container sx={{mb:5}}>
        <Grid container alignItems="center">
          {/* <Grid item xs={12} lg={5}> */}
          <Grid item xs={12}>
            <MKTypography variant="h3" my={1}>
              Research Interests
            </MKTypography>
            <MKTypography variant="body2" color="text" mb={0}>
              {/* We work on problems in the intersection of networking and systems, especially with accelators. */}
              Research interests broadly cover network research areas and the recent research goal is on the networking performance enhancement inside of the systems by optimizing in-system latency for processing network packets. Specifically, it is known that GPU clusters and HPC data centers are experiencing severe performance degradation due to the network bottleneck, and the recent research goal is on that issue. Implementing high performance networking systems for open source projects also resides inside of the research goals, and projects such as Kubernetes, DistTensor and Horovod are considered as candidates.
            </MKTypography>
            {/* <MKTypography
              component="a"
              href="#"
              variant="body2"
              color="info"
              fontWeight="regular"
              sx={{
                width: "max-content",
                display: "flex",
                alignItems: "center",

                "& .material-icons-round": {
                  fontSize: "1.125rem",
                  transform: "translateX(3px)",
                  transition: "transform 0.2s cubic-bezier(0.34, 1.61, 0.7, 1.3)",
                },

                "&:hover .material-icons-round, &:focus .material-icons-round": {
                  transform: "translateX(6px)",
                },
              }}
            >
              More about us
              <Icon sx={{ fontWeight: "bold" }}>arrow_forward</Icon>
            </MKTypography> */}
          </Grid>
          {/* <Grid item xs={12} lg={6} sx={{ ml: { xs: -2, lg: "auto" }, mt: { xs: 1, lg: 0 } }}>
            <Stack>
              <MKBox display="flex" alignItems="center" p={2}>
                <MKBox
                  width="3rem"
                  height="3rem"
                  variant="gradient"
                  bgColor="info"
                  color="white"
                  coloredShadow="info"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  borderRadius="xl"
                >
                  <Icon fontSize="small">mediation</Icon>
                </MKBox>
                <MKTypography variant="body2" color="text" pl={2}>
                  It becomes harder for us to give others a hand.
                  <br />
                  We get our heart broken by people we love.
                </MKTypography>
              </MKBox>
              <MKBox display="flex" alignItems="center" p={2}>
                <MKBox
                  width="3rem"
                  height="3rem"
                  variant="gradient"
                  bgColor="info"
                  color="white"
                  coloredShadow="info"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  borderRadius="xl"
                >
                  <Icon fontSize="small">settings_overscan</Icon>
                </MKBox>
                <MKTypography variant="body2" color="text" pl={2}>
                  As we live, our hearts turn colder.
                  <br />
                  Cause pain is what we go through as we become older.
                </MKTypography>
              </MKBox>
              <MKBox display="flex" alignItems="center" p={2}>
                <MKBox
                  width="3rem"
                  height="3rem"
                  variant="gradient"
                  bgColor="info"
                  color="white"
                  coloredShadow="info"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  borderRadius="xl"
                >
                  <Icon fontSize="small">token</Icon>
                </MKBox>
                <MKTypography variant="body2" color="text" pl={2}>
                  When we lose family over time.
                  <br />
                  What else could rust the heart more over time? Blackgold.
                </MKTypography>
              </MKBox>
            </Stack>
          </Grid> */}
        </Grid>
      </Container>

      <Container sx={{mb:10}}>
        <Grid container alignItems="center">
          <Grid item xs={12} lg={5} order={{ xs: 2, lg: 1 }}>
            <MKBox position="relative">
              <MKBox component="img" src={ra1} alt="macbook" width="100%" />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={5.5} sx={{ ml: { xs: 0, lg: "auto" }, mt: { xs: 1, lg: 0 } }}  order={{ xs: 1, lg: 2 }} >
            <MKTypography variant="h4" my={1}>
              GPGPU for Packet Processing
            </MKTypography>
            <MKTypography variant="body2" color="text" mb={2}>
              Pain is what we go through as we become older. We get insulted by others, lose trust
              for those others. We get back stabbed by friends. It becomes harder for us to give
              others a hand.
            </MKTypography>
            <MKTypography
              component="a"
              href="#"
              variant="body2"
              color="info"
              fontWeight="regular"
              sx={{
                width: "max-content",
                display: "flex",
                alignItems: "center",

                "& .material-icons-round": {
                  fontSize: "1.125rem",
                  transform: "translateX(3px)",
                  transition: "transform 0.2s cubic-bezier(0.34, 1.61, 0.7, 1.3)",
                },

                "&:hover .material-icons-round, &:focus .material-icons-round": {
                  transform: "translateX(6px)",
                },
              }}
            >
              {/* More about us
              <Icon sx={{ fontWeight: "bold" }}>arrow_forward</Icon> */}
            </MKTypography>
          </Grid>
        </Grid>
      </Container>

      <Container sx={{mb:10}}>
        <Grid container alignItems="center">
          <Grid item xs={12} lg={5.5}>
            <MKTypography variant="h4" my={1}>
              Remote Direct Memory Access
            </MKTypography>
            <MKTypography variant="body2" color="text" mb={2}>
              Pain is what we go through as we become older. We get insulted by others, lose trust
              for those others. We get back stabbed by friends. It becomes harder for us to give
              others a hand.
            </MKTypography>
            {/* <MKTypography
              component="a"
              href="#"
              variant="body2"
              color="info"
              fontWeight="regular"
              sx={{
                width: "max-content",
                display: "flex",
                alignItems: "center",

                "& .material-icons-round": {
                  fontSize: "1.125rem",
                  transform: "translateX(3px)",
                  transition: "transform 0.2s cubic-bezier(0.34, 1.61, 0.7, 1.3)",
                },

                "&:hover .material-icons-round, &:focus .material-icons-round": {
                  transform: "translateX(6px)",
                },
              }}
            >
              More about us
              <Icon sx={{ fontWeight: "bold" }}>arrow_forward</Icon>
            </MKTypography> */}
          </Grid>
          <Grid item xs={12} lg={5} sx={{ ml: { xs: 0, lg: "auto" }, mt: { xs: 6, lg: 0 } }}>
            <MKBox position="relative">
              <MKBox component="img" src={ra2} alt="macbook" width="100%" />
            </MKBox>
          </Grid>
        </Grid>
      </Container>

      <Container sx={{mb:10}}>
        <Grid container alignItems="center">
          <Grid item xs={12} lg={5}  order={{ xs: 2, lg: 1 }}>
            <MKBox position="relative">
              <MKBox component="img" src={ra3} alt="macbook" width="100%" />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={5.5} sx={{ ml: { xs: 0, lg: "auto" }, mt: { xs: 6, lg: 0 } }}  order={{ xs: 1, lg: 2 }}>
            <MKTypography variant="h4" my={1}>
              FPGA
            </MKTypography>
            <MKTypography variant="body2" color="text" mb={2}>
              Pain is what we go through as we become older. We get insulted by others, lose trust
              for those others. We get back stabbed by friends. It becomes harder for us to give
              others a hand.
            </MKTypography>
            <MKTypography
              component="a"
              href="#"
              variant="body2"
              color="info"
              fontWeight="regular"
              sx={{
                width: "max-content",
                display: "flex",
                alignItems: "center",

                "& .material-icons-round": {
                  fontSize: "1.125rem",
                  transform: "translateX(3px)",
                  transition: "transform 0.2s cubic-bezier(0.34, 1.61, 0.7, 1.3)",
                },

                "&:hover .material-icons-round, &:focus .material-icons-round": {
                  transform: "translateX(6px)",
                },
              }}
            >
              {/* More about us
              <Icon sx={{ fontWeight: "bold" }}>arrow_forward</Icon> */}
            </MKTypography>
          </Grid>

        </Grid>
      </Container>
    </MKBox>
  );
}

export default FeaturesOne;