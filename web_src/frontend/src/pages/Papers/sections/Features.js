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

const PaperItems = [
  {
    title: "Peer-to-peer communication method in content centric network environment",
    link: "https://patents.google.com/patent/US9485288B2/en",
    author: ["Kim Yusung", "Younghoon Kim", "Ikjun Yeom"],
    journal: "US Patent 9,485,288",
    year: 2017,
    description: `This paper is good.
    This paper is good.
    This paper is good.
    This paper is good.`,
  },
  {
    title: "Peer-assisted multimedia delivery using periodic multicast",
    link: "https://www.sciencedirect.com/science/article/abs/pii/S0020025514011141",
    journal: "Information Sciences 298",
    year: 2015,
    author: ["Younghoon Kim", "Yusung Kim", "Hyunsoo Yoon", "Ikjun Yeom"],
  },
  {
    title: "GPU-Ether: GPU-native packet I/O for GPU applications on commodity ethernet",
    link: "https://ieeexplore.ieee.org/abstract/document/9488699/",
    journal: "IEEE INFOCOM 2021",
    year: 2021,
    author: ["Changue Jung", "Suhwan Kim", "Ikjum Yeom", "Honguk Woo", "Younghoon Kim"],
  },
]

const LabMembers = [
  {
    name: "Younghoon Kim",
    link: "/professor",
  },
  {
    name: "Suhwan Kim",
    link: "/student#susoon",
  }
]

function FeaturesOne() {
  PaperItems.sort((a, b) => b.year - a.year);
  return (
    <>
      <Card
            sx={{
              p: 2,
              mx: { xs: 2, lg: 3 },
              mt: 4,
              mb: 4,
              backgroundColor: "#defede88",
              boxShadow: ({ boxShadows: { xxl } }) => xxl,
            }}
          >
        
            <MKBox component="section" py={{ xs: 3, md: 4 }}>
              <Container sx={{mb:2}}>
                <Grid container alignItems="flex-start">
                  <Grid flexGrow={1}>
                  {PaperItems.map((paper, index) => (
                      <Stack spacing={0} mb={1} >
                        <MKTypography variant="body1">
                          <a href={paper.link}>{paper.title}</a>
                        </MKTypography>
                        <MKTypography variant="body2" color="textSecondary">
                          {paper.year}
                        </MKTypography>
                        <Stack spacing={0} mb={0} width="match-parent" direction="row" alignItems="center" justifyContent="space-between">
                          <MKTypography variant="body2" color="textSecondary">
                            {paper.journal}
                          </MKTypography>
                          <MKTypography variant="body2" color="textSecondary">
                            {/* List all paper.author with comma. If he/she in the LabMembers, link it.*/}
                            {paper.author.map((author, index) => (
                              LabMembers.filter((member) => member.name === author).length > 0 ?
                              <><a href={LabMembers.filter((member) => member.name === author)[0].link}>{author}</a>{index !== paper.author.length - 1 ? ", " : ""}</>
                              :
                              <>{author}{index !== paper.author.length - 1 ? ", " : ""}</>
                            ))}
                          </MKTypography>
                        </Stack>
                      </Stack>
                    ))}
                  </Grid>
                </Grid>
              </Container>
            </MKBox>
          </Card>
    </>
  );
}

export default FeaturesOne;