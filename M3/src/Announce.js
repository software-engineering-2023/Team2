

import React, { useState } from 'react';
import { Paper, TextField, Button, Typography, Box } from '@material-ui/core';
import CheckIcon from '@material-ui/icons/Check';
import AdminNavbar from './AdminNavbar';

const Announce= () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform form submission logic
    console.log('Submitted announcement:', { title, description });
    // Reset form fields
    setTitle('');
    setDescription('');
    // Set submitted flag to true
    setSubmitted(true);
  };

  return (
    <div className="Announce">
        <AdminNavbar></AdminNavbar>
    <Paper elevation={3} style={{ padding: '20px' }}>
      {!submitted ? (
        <form onSubmit={handleSubmit}>
          <TextField
            label="Title"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            required
            fullWidth
          />
          <TextField
            label="Description"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
            multiline
            rows={4}
            required
            fullWidth
            style={{ marginTop: '10px' }}
          />
          <Button type="submit" variant="contained" color="primary" style={{ marginTop: '10px' }}>
            Submit
          </Button>
        </form>
      ) : (
        <Box display="flex" alignItems="center" flexDirection="column">
          <CheckIcon style={{ color: 'green', fontSize: '48px' }} />
          <Typography variant="h6" style={{ marginTop: '10px' }}>
            Announcement submitted successfully!
          </Typography>
        </Box>
      )}
    </Paper>
    </div>
  );
};

export default Announce;