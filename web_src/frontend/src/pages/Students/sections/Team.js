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

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Material Kit 2 React examples
import HorizontalTeamCard from "examples/Cards/TeamCards/HorizontalTeamCard";
import TeamCard from "components/TeamCard"

// Images
import team1 from "assets/images/team-5.jpg";
import team2 from "assets/images/bruce-mars.jpg";
import team3 from "assets/images/ivana-squares.jpg";
import team4 from "assets/images/ivana-square.jpg";

import axios from 'axios'
import {useEffect, useState} from 'react'

import dotenv from "dotenv";
dotenv.config();

// status | start_date | end_date (if not null, isAlumni) | email | topic

const reqUrlPrefix = process.env.NODE_ENV === "development" ? `http://localhost:5000` : "https://api.netsys.skku.edu";
// const reqUrlPrefix = "https://api.netsys.skku.edu/content/student/"

const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const dateFormatting = (student) => {
    const {start_year, start_month, end_year, end_month} = student;
    let start_date = '';
    let end_date = '';

    if (start_year && start_month){
      start_date = monthNames[start_month-1] + ". '" + String(start_year).slice(2);
    }

    if (end_year && end_month){
      end_date = monthNames[end_month-1] + ". '" + String(end_year).slice(2);
    }

    if (!start_date && !end_date)
      return ""

    return start_date + "~" + end_date
  }

  const colorDegreeMatch = (degree) => {
    switch (degree) {
      case "phd":
      case "combined":
        return "error";
      case "master":
        return "info";
      case "under":
        return "success";
      default:
        return "default";
    }
  }

  const degreeFormatting = (degree) => {
    switch (degree) {
      case "phd":
        return "Ph.D";
      case "combined":
        return "Combined M.S./Ph.D";
      case "master":
        return "M.S.";
      case "under":
        return "B.S.";
      default:
        return "phd/combined/master/under";
    }
  }

function Team() {

  const [data, setData] = useState([]);

  useEffect(async() => {
    const result = await axios({
      method: "get",
      url: `${reqUrlPrefix}/student`,
      responseType: "json",
      // params: { something: "asd", asdf: "as"}
    });
    setData(result.data);
    console.log(result.data)
  }, [])

  let students, phd=[], master=[], under=[], alumni=[];
  // Request Student Data
  if (data){
    let students = data;
    for (var student of students){
      if (student.is_alumni === true)
        alumni.push(student);
      else{
        console.log(student)
        switch (student.degree) {
          case 'phd':
          case 'combined':
            phd.push(student);
            break;
          case 'master':
            master.push(student);
            break;
          case 'under':
            under.push(student);
            break;
          default:
            console.log("Wrong Classification! -->", student.degree);
        }
      }
    }
  }

  return (
    <>
      {phd.length > 0 &&
      <MKBox
      component="section"
      variant="gradient"
      bgColor="white"
      position="relative"
      py={6}
      px={{ xs: 2, lg: 0 }}
      mx={-2}
      >
      <Container>
        <Grid container>
          <Grid item xs={12} md={8} sx={{ mb: 6 }}>
            <MKTypography variant="h3" color="inherit">
              Ph.D. Students
            </MKTypography>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
        {
          phd.map(student => {
            return (
              <Grid key={student._id} item xs={12} lg={6}>
              <MKBox key={student._id} mb={1}>
              <TeamCard
                key={student._id}
                image={reqUrlPrefix + "/content/student/" +  student._id + "." + student.image_type}
                name={student.name}
                position={{ color: "error", status: degreeFormatting(student.degree), date: dateFormatting(student) }}
                email={student.email}
                topic={student.topic}
              />
              </MKBox>
              </Grid>
            )
          })
        }
        </Grid>
        </Container>
        </MKBox> 
      }

      
    {master.length > 0 &&
      <MKBox
      component="section"
      variant="gradient"
      bgColor="dark"
      position="relative"
      py={6}
      px={{ xs: 2, lg: 0 }}
      mx={-2}
      >
      <Container>
        <Grid container>
          <Grid item xs={12} md={8} sx={{ mb: 6 }}>
            <MKTypography variant="h3" color="white">
              M.S. Students
            </MKTypography>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
        {
          master.map(student => {
            return (
              <Grid key={student._id} item xs={12} lg={6}>
              <MKBox key={student._id} mb={1}>
              <TeamCard
                key={student._id}
                image={reqUrlPrefix + "/content/student/" + student._id + "." + student.image_type}
                name={student.name}
                position={{ color: colorDegreeMatch(student.degree), status: degreeFormatting(student.degree), date: dateFormatting(student) }}
                email={student.email}
                topic={student.topic}
              />
              </MKBox>
              </Grid>
            )
          })
        }
        </Grid>
        </Container>
        </MKBox> 
      }

    {under.length > 0 &&
      <MKBox
      component="section"
      variant="gradient"
      bgColor="white"
      position="relative"
      py={6}
      px={{ xs: 2, lg: 0 }}
      mx={-2}
      >
      <Container>
        <Grid container>
          <Grid item xs={12} md={8} sx={{ mb: 6 }}>
            <MKTypography variant="h3" color="inherit">
              Undergraduate
            </MKTypography>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
        {
          under.map(student => {
            return (
              <Grid key={student._id} item xs={12} lg={6}>
              <MKBox key={student._id} mb={1}>
              <TeamCard
                key={student._id}
                image={reqUrlPrefix + "/content/student/" + student._id + "." + student.image_type}
                name={student.name}
                position={{ color: colorDegreeMatch(student.degree), status: degreeFormatting(student.degree), date: dateFormatting(student) }}
                email={student.email}
                topic={student.topic}
              />
              </MKBox>
              </Grid>
            )
          })
        }
        </Grid>
        </Container>
        </MKBox> 
      }


    {alumni.length > 0 &&
      <MKBox
      component="section"
      variant="gradient"
      bgColor="dark"
      position="relative"
      py={6}
      px={{ xs: 2, lg: 0 }}
      mx={-2}
      >
      <Container>
        <Grid container>
          <Grid item xs={12} md={8} sx={{ mb: 6 }}>
            <MKTypography variant="h3" color="white">
              Alumni
            </MKTypography>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
        {
          alumni.map(student => {
            return (
              <Grid key={student._id} item xs={12} lg={6}>
              <MKBox key={student._id} mb={1}>
              <TeamCard
                key={student._id}
                image={reqUrlPrefix + "/content/student/" + student._id + "." + student.image_type}
                name={student.name}
                position={{ color: colorDegreeMatch(student.degree), status: degreeFormatting(student.degree), date: dateFormatting(student) }}
                email={student.email}
                topic={student.topic}
              />
              </MKBox>
              </Grid>
            )
          })
        }
        </Grid>
        </Container>
        </MKBox> 
      }
    </>
  );
}

export default Team;
