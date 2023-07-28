import React from 'react';
import { Link as RouteLink } from 'react-router-dom'
import { Button } from '@mui/material';

const NavLink = ({ page, index, tabValue, handleTabChange }) => (
    <Button
        variant="text"
        component={RouteLink}
        to={page.path}
        sx={{
            textTransform: 'none',
            color: tabValue === index ? 'primary.main' : 'black',
        }}
    >
        {page.name}
    </Button>
);

export default NavLink;
