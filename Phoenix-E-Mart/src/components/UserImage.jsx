import React from 'react'
import classes from './UserImage.module.css'

const UserImage = ({user}) => {
  return (
    <div className={classes.imgdiv}>
        <img src="user.png" alt="user" className='rounded-s-full rounded-e-full'/>
    </div>
  )
}

export default UserImage