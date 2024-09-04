import React from 'react'
import classes from './ProfileMenu.module.css'
import { Link } from 'react-router-dom'

const ProfileMenu = (props) => {
  return (
    <div className={classes.wrapper}>
      <div className='border-radius:0.25rem' style={{height:'450px'}}>
        <ul>
            <li><Link to='/offers'>Offers Recieved</Link></li>
            <hr />
            <li><Link to='/MyOffers'>My Offers</Link></li>
            <hr />
            <li><Link to='/savedAdress'>Saved Address</Link></li>
            <hr />
            <li> <Link to='/contact'>Help Center</Link></li>
            <hr/>
            <li> <Link to='/Changepassword'>Change password</Link></li>
        </ul>
    </div>
    </div>
    
  )
}

export default ProfileMenu