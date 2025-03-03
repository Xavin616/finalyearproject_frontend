import { Tabs, Tab, Box, Typography, Button } from '@mui/material';
import React from 'react'
import Assignment from '../../../components/Lecturer/Assignment';
import PropTypes from 'prop-types';
import { useState } from 'react'
import './css/assignment.css'
import CreateAssignmentModal from '../../../components/Lecturer/modal/CreateAssignmentModal';

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};
  
  
function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

export default function LecturerAssignments() {
    const [value, setValue] = useState(0)
    const [open, setOpen] = useState(false)


    const handleOpen = () => setOpen(true);

    const handleChange = (event, newValue) => {
        setValue(newValue)
    }

  return (
    <div style={{ padding: '10px 0px' }}>
        <div className='main-assign-header'>
            <Typography color={'black'} fontWeight='bold' variant='h4'>Assignments</Typography>
            <Button onClick={handleOpen} sx={{ p: '8px 20px', textTransform: 'none', fontWeight: 'bold' }} className='assign-create' variant='contained' >Create</Button>
        </div>
        <div style={{ padding: '10px 0px' }}>
            <Tabs sx={{borderBottom: '1px solid lightgray' }} value={value} onChange={handleChange}>
                <Tab sx={{ marginLeft: '25px',fontSize: '1.1rem', fontWeight: 'bold', textTransform: 'none', color: 'black'}} label={"Assigned"} {...a11yProps(0)} />
            </Tabs>
            <TabPanel value={value} index={0}>
                <Assignment/>
            </TabPanel>
        </div>
        <CreateAssignmentModal open={open} setOpen={setOpen} />
    </div>
  )

}
