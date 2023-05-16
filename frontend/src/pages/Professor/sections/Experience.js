import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(period, position, department, place) {
  return { period, position, department, place };
}

const rows = [
  createData('2019 - Present', 'Assistant Professor', 'Department of Computer Science and Engineering, College of Software', 'Sungkyunkwan University'),
  createData('2016 - 2019', 'Research Professor', 'College of Information and Communication Engineering', 'Sungkyunkwan University'),
  createData('2015 - 2016', 'Post-Doc', 'College of Information and Communication Engineering', 'Sungkyunkwan University'),
];

export default function Expericence() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.period}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="center">
                {row.period}
              </TableCell>
              <TableCell align="center">{row.position}</TableCell>
              <TableCell align="right">{row.department}</TableCell>
              <TableCell align="center">{row.place}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
