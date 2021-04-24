import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import NavBar from '../utils/NavBar';
import Container from '@material-ui/core/Container';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(name, calories, fat, carbs, x) {
  return { name, calories, fat, carbs, x };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 50),
  createData('Ice cream sandwich', 237, 9.0, 37, 50),
  createData('Eclair', 262, 16.0, 24, 50),
  createData('Cupcake', 305, 3.7, 67, 50),
  createData('Gingerbread', 356, 16.0, 49, 50),
];

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export default function Report() {
  const classes = useStyles();

  return (
    <div style={{display: 'flex'}}>
    <NavBar/>
    <Container component="main" maxWidth="xl">

    <TableContainer component={Paper} style={{marginTop: 75}}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell style={{fontSize: 18, fontWeight: 600}}>Date</StyledTableCell>
            <StyledTableCell align="right" style={{fontSize: 18, fontWeight: 600}}>Quantity</StyledTableCell>
            <StyledTableCell align="right" style={{fontSize: 18, fontWeight: 600}}>Inspector</StyledTableCell>
            <StyledTableCell align="right" style={{fontSize: 18, fontWeight: 600}}>Approved</StyledTableCell>
            <StyledTableCell align="right" style={{fontSize: 18, fontWeight: 600}}>Rejected</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.calories}</StyledTableCell>
              <StyledTableCell align="right">{row.fat}</StyledTableCell>
              <StyledTableCell align="right">{row.carbs}</StyledTableCell>
              <StyledTableCell align="right">{row.x}</StyledTableCell>

            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Container>
    </div>
  );
}