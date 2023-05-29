import * as React from 'react';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import {Button } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { Card } from '@mui/material';

import AdminNavbar from './AdminNavbar';
import './Issues.css';

function createData(id, date, buttonLabel) {
  return {
    id,
    date,
    buttonLabel
  
  };
}


const Row = ({ row, onDelete }) => {
  const [open, setOpen] = React.useState(false);

  const handleDelete = () => {
    onDelete(row.id); // Pass the row ID to the onDelete function
  };

  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row" align="left">
          {row.id}
        </TableCell>
        <TableCell align="left">{row.date}</TableCell>
        <TableCell align="right">
          <Button variant="contained" color="primary" onClick={() => onDelete(row.id)}>
            {row.buttonLabel}
          </Button>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={3}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                Description
              </Typography>
              <div className="card">
                <div className="card-body">
                {row.id === '1' ? (
                  // Content for the first record
                  "I'm facing a login issue while accessing my bank account online. Despite entering the correct username and password, I receive an error message stating 'Incorrect credentials.' This problem persists on both my laptop and smartphone. It has been occurring since yesterday, preventing me from logging in successfully. Please address this issue promptly. Thank you."
                ) : row.id === '2' ? (
                  // Content for the second record
                  "I'm experiencing a transaction error when trying to transfer funds between my accounts. After entering the recipient's information and the amount, the system displays an error message stating 'Transaction failed.' I have attempted multiple times with different recipients and encounter the same issue. Please investigate and resolve this problem. Thank you."
                ) :  row.id === '3' ? (
                  // Content for the second record
                  "I have a problem."
                ) : (
                  // Default content if the ID doesn't match any specific case
                  "No description available for this record."
                )}
                </div>
              </div>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
};



const Issues = () => {

  const [rows, setRows] = React.useState( [
    createData('1', '2023-03-05' , 'Resolved'),
    createData('2', '2023-04-02' , 'Resolved'),
    createData('3', '2023-05-02' , 'Resolved'),
  ]);

  const handleDeleteRow = (rowId) => {
   
    setRows((prevRows) => prevRows.filter((row) => row.id !== rowId));
  };
  return (
    <div className="ann">
      <AdminNavbar></AdminNavbar>
      <TableContainer component={Paper} >
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell width='50px' />
              <TableCell>Issue ID</TableCell>
              <TableCell align="left">Date</TableCell>
              <TableCell align="left" width='80px'>Status</TableCell> 
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <Row key={row.id} row={row}  onDelete={handleDeleteRow} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
export default Issues;