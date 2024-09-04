import React from 'react';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import classes from './AdminSidebar.module.css';

const adminSidebar = () =>{
    return(
        <React.Fragment>
        <Sidebar  className={classes.sidebar}>
        <Menu className={classes.menu}>
            <MenuItem className={classes.menu_list}> Users List </MenuItem>
            <MenuItem className={classes.menu_list}> Statistics </MenuItem>
            <MenuItem className={classes.menu_list}> Queries </MenuItem>
            <MenuItem className={classes.menu_list}> Remove User </MenuItem>
            <MenuItem className={classes.menu_list}> Logout </MenuItem>
            <br />
        </Menu>
        </Sidebar>
        </React.Fragment>
    )
}

export default adminSidebar;
