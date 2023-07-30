import React from 'react'
import "./ContactUs.css"
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function ContactUs() {
    return (
        <Box sx={{
            backgroundImage: `url(${process.env.PUBLIC_URL + 'images/formImage.jpeg'})`
        }}
            className="formBackground"
        >
            <div className='mainForm'>
                <div className='space'></div>
                <div className='formHead'>
                    <h1 className='formHeading'> Get in Touch </h1>
                    <p> We will answer your issues shorlty </p>
                </div>
                <Box
                    component="form"
                    sx={{
                        '& > :not(style)': { m: 1, width: '25ch' },
                    }}
                    className='Form'
                    noValidate
                    autoComplete="off"
                >
                    <TextField required style={{ width: "50vh" }} className="contactForm" id="formName" label="Name" variant="outlined" />
                    <TextField required style={{ width: "50vh" }} className="contactForm" id="formEmail" label="Email" variant="outlined" />
                    <TextField required type='email' style={{ width: "50vh" }} className="contactForm" id="formContact" label="Contact No." variant="outlined" />
                    <TextField
                        style={{ width: "50vh" }}
                        className="contactForm"
                        id="formIssue"
                        label="Describe Your Issue"
                        multiline
                        rows={4}
                        maxRows={4}
                        required
                    />
                    <Button variant="contained"
                        onClick={() => {
                            alert("We have recieved your respone");
                        }}>
                        Submit
                    </Button>
                </Box>
            </div>
        </Box>
    )
}

export default ContactUs