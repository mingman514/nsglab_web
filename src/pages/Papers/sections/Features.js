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
    name: "Younghoon Kim",
    position: "Professor",
    googleScholar: "https://scholar.google.com/citations?hl=ko&user=arsNhkgAAAAJ",
    papers: [
      {
        title: "Deep Learning for Image Classification",
        description: `Deep Learning for Image Classification is a paper that aims to classify images using deep learning.
        The paper is published in the journal of Machine Learning.`,
        link: "https://arxiv.org/abs/1606.06160",
      },
      {
        title: "Deep Learning for Image Classificatio2234n",
        description: `Deep Learning for Image Classification is a paper that aims to classify images using deep learning.
        The paper is published in the journal of Machine Learning.`,
        link: "https://arxiv.org/abs/1606.06160",
      },
      {
        title: "Deep Learning for Image Classific645874ation",
        description: `Deep Learning for Image Classification is a paper that aims to classify images using deep learning.
        The paper is published in the journal of Machine Learning.`,
        link: "https://arxiv.org/abs/1606.06160",
      },
    ]
  },
  {
    name: "Mingman",
    position: "Master",
    googleScholar: null,
    papers: [
      {
        title: "Deep Learning for Image Classification435423",
        description: `Deep Learning for Image Classification is a paper that aims to classify images using deep learning.
        The paper is published in the journal of Machine Learning.`,
        link: "https://arxiv.org/abs/1606.06160",
      },
      {
        title: "Deep Learning for Image Classification1232132",
        description: null,
        link: "https://arxiv.org/abs/1606.06160",
      },
      {
        title: "Deep Learning for Image Classification123",
        description: null,
        link: "https://arxiv.org/abs/1606.06160",
      },
    ]
  },
]

function FeaturesOne() {
  return (
    <>
        {PaperItems.map((item, index) => (
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
                  <Grid container>
                    <Grid item style={{flexGrow:"1"}}>
                      <MKTypography variant="h3" my={1}>
                        {item.name}
                      </MKTypography>
                    </Grid>
                    <Grid item>
                      <MKTypography variant="h4" my={1}>
                        {item.position}
                      </MKTypography>
                    </Grid>
                    
                    
                  </Grid>
                  {item.googleScholar?
                      <MKTypography variant="h5" my={1}>
                        <a href={item.googleScholar}>Google Scholar</a>
                      </MKTypography>
                      : <></>}
                </Grid>
              </Container>
              <Container sx={{mb:2}}>
                <Grid container alignItems="flex-start">
                  <Grid>
                    <MKTypography variant="h5" my={1}>
                      Papers
                    </MKTypography>
                  </Grid>
                </Grid>
              </Container>
              <Container sx={{mb:2}}>
                <Grid container alignItems="flex-start">
                  <Grid>
                    {item.papers.map((paper, index) => (
                      <Stack spacing={0} mb={1}>
                        <MKTypography variant="body1">
                          <a href={paper.link}>{paper.title}</a>
                        </MKTypography>
                        {paper.description ? (
                          <MKTypography variant="body2" mb={1}>
                          {paper.description}
                        </MKTypography>
                        ) : <></>}
                      </Stack>
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