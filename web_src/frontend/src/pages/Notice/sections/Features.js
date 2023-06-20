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
    title: "학부연구생 모집 중",
    description: `학부연구생을 모집 중입니다.
    아래 조건에 맞는 분은 연구실로 문의 바랍니다.
    - 소프트웨어학과 원전공 혹은 복수전공
    - 컴퓨터 네트워크, 시스템프로그래밍 수강
    - C/C++/Python/Java/Go 등 프로그래밍 언어 경험
    - 리눅스 환경에서의 개발 경험
    `,
  },
  {
    title: "Another Notice",
    description: `Another Example Notice.`,
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