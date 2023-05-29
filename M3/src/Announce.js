

import React, { useState } from 'react';
import { Paper, TextField, Button, Typography, Box } from '@material-ui/core';
import CheckIcon from '@material-ui/icons/Check';
import AdminNavbar from './AdminNavbar';
import './Announce.css';
import { FormControl, FormControlLabel, Radio, RadioGroup , FormLabel , FormHelperText } from '@mui/material';

       

const Announce = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [selectedOption, setSelectedOption] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (selectedOption === '') {
      setError(true);
    } else {
      setError(false);
      // Perform form submission logic
      console.log('Submitted announcement:', { title, description, selectedOption });
      // Reset form fields
      setTitle('');
      setDescription('');
      setSelectedOption('');
      // Set submitted flag to true
      setSubmitted(true);
    }
  };

  return (
    <div className="Announce">
      <AdminNavbar />
      <div className="sep">
      <Paper elevation={3} style={{ padding: '20px', width: '600px', maxWidth: '90%' }}>
        {!submitted ? (
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
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
            <FormControl required error={error} component="fieldset" style={{ marginTop: '10px' }}>
              <FormLabel component="legend">Choose Audience:</FormLabel>
              <RadioGroup
                aria-label="audience"
                name="audience"
                value={selectedOption}
                onChange={(event) => setSelectedOption(event.target.value)}
              >
                <FormControlLabel value="client" control={<Radio />} label="Client" />
                <FormControlLabel value="banker" control={<Radio />} label="Banker" />
                <FormControlLabel value="clientBanker" control={<Radio />} label="Client/Banker" />
              </RadioGroup>
              {error && <FormHelperText>Please choose one of the options.</FormHelperText>}
            </FormControl>
            <div style={{ marginTop: '10px', alignSelf: 'flex-end' }}>
              <Button type="submit" variant="contained" color="primary">
                Submit
              </Button>
            </div>
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
    </div>
  );
};

export default Announce;